"use client";
import * as ReactNS from "react";

export async function compileUserComponent(
  code: string
): Promise<React.ComponentType | null> {
  const Babel = (await import(
    "@babel/standalone"
  )) as typeof import("@babel/standalone");

  const wrapped = `
${code}
;return (typeof exports !== 'undefined' && exports.default)
  || (typeof UserComponent !== 'undefined' ? UserComponent 
  : (typeof Default !== 'undefined' ? Default : null));
`;

  const transformed = Babel.transform(wrapped, {
    presets: ["react", ["env", { targets: { esmodules: true } }]],
    filename: "UserComponent.jsx",
  }).code;

  if (!transformed) return null;

  const factory = new Function("React", "exports", transformed);
  const exportsObj: Record<string, unknown> = {};
  const Comp = factory(ReactNS, exportsObj);

  return (
    (Comp as React.ComponentType) ||
    (exportsObj.default as React.ComponentType) ||
    null
  );
}
