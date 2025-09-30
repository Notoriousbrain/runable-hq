"use client";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  LayoutGrid,
  Users,
  Settings,
  Plus,
  Search,
  HardDrive,
  Mic2,
  Globe,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-[calc(100dvh-44px)] flex flex-col">
      <div className="h-12 flex items-center gap-2 px-3 border-b border-white/10">
        <div className="h-5 w-5 rounded grid place-items-center bg-white text-black text-[10px] font-bold">
          R
        </div>
        <span className="font-medium">Runable</span>
      </div>

      <nav className="p-2 space-y-2 overflow-auto">
        <SidebarItem
          icon={<Plus className="h-4 w-4" />}
          label="New Chat"
          kbd="⌘ 0"
          active
        />
        <SectionTitle>My Workspace</SectionTitle>
        <SidebarItem
          icon={<Search className="h-4 w-4" />}
          label="Search"
          kbd="⌘ K"
        />
        <SidebarItem
          icon={<HardDrive className="h-4 w-4" />}
          label="Run Drive"
        />
        <SidebarItem icon={<Mic2 className="h-4 w-4" />} label="Podcasts" />
        <SidebarItem icon={<Globe className="h-4 w-4" />} label="Websites" />
        <SectionTitle>My Chats</SectionTitle>
        <EmptyRow label="No chats" />
      </nav>

      <div className="mt-auto p-3 space-y-3">
        <div className="rounded-xl bg-[#1b6ffe] text-black p-3">
          <div className="text-[13px] font-medium">Got Feedback? DM us</div>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <Badge className="bg-white text-black">X</Badge>
            <Badge className="bg-white text-black">Slack</Badge>
            <Badge className="bg-white text-black">LinkedIn</Badge>
            <Badge className="bg-white text-black">Mail</Badge>
          </div>
        </div>
        <div className="rounded-xl bg-white/5 p-3 text-sm">
          <div className="font-medium">Invite friends!</div>
          <div className="text-white/60 text-xs">
            Get 5,000 credits for each referral
          </div>
        </div>
      </div>

      <div className="p-2 border-t border-white/10 grid grid-cols-4 gap-2 text-white/70">
        <DockIcon icon={<Home className="h-4 w-4" />} />
        <DockIcon icon={<LayoutGrid className="h-4 w-4" />} />
        <DockIcon icon={<Users className="h-4 w-4" />} />
        <DockIcon icon={<Settings className="h-4 w-4" />} />
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  kbd,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  kbd?: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-white/10 ${
        active ? "bg-white/10" : ""
      }`}
    >
      <span className="shrink-0 grid place-items-center text-white/80">
        {icon}
      </span>
      <span className="truncate text-white/90">{label}</span>
      {kbd && <span className="ms-auto text-[10px] text-white/50">{kbd}</span>}
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 pt-3 text-[11px] uppercase tracking-wide text-white/40">
      {children}
    </div>
  );
}

function EmptyRow({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-white/10 text-white/40 text-xs px-2 py-6">
      {label}
    </div>
  );
}

function DockIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-white/10">
      {icon}
    </button>
  );
}
