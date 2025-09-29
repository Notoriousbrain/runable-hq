"use client";
import * as ReactNS from "react";

export async function compileUserComponent(
  code: string
): Promise<React.ComponentType | null> {
  // Lazy import @babel/standalone to keep initial bundle smaller
  const Babel: any = await import("@babel/standalone");

  const wrapped = `\n${code}\n;return (typeof exports !== 'undefined' && exports.default) || (typeof UserComponent !== 'undefined' ? UserComponent : (typeof Default !== 'undefined' ? Default : null));`;

  const transformed = Babel.transform(wrapped, {
    presets: ["react", ["env", { targets: { esmodules: true } }]],
    filename: "UserComponent.jsx",
  }).code;

  const factory = new Function("React", "exports", transformed);
  const exportsObj: any = {};
  const Comp = factory(ReactNS, exportsObj);
  return Comp || exportsObj.default || null;
}
