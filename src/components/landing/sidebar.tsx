"use client";
import { Badge } from "@/components/ui/badge";
import {
  House,
  Plus,
  Search,
  HardDrive,
  Mic2,
  Globe,
  User,
  Grid3X3,
  CreditCard,
  MessageCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-[calc(100dvh-80px)] flex flex-col">
      <nav className="p-2 space-y-2 overflow-auto">
        <SidebarItem
          icon={<Plus className="h-4 w-4" />}
          label="New Chat"
          active
        />
        <SectionTitle>My Workspace</SectionTitle>
        <SidebarItem icon={<Search className="h-4 w-4" />} label="Search" />
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
        <div className="rounded-xl bg-[#5193cd] text-black p-3">
          <div className="text-white font-medium">Got Feedback? DM us</div>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <Badge className="flex items-center justify-center bg-[#F9F9F91A] hover:bg-[#F9F9F933] border-[#F9F9F94D] border-[0.5px] p-1 rounded-sm">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.538 0.997242C12.5247 0.532362 11.4275 0.19495 10.2846 0C10.2645 0.000281706 10.2453 0.00836692 10.2313 0.0224943C10.0941 0.26993 9.93411 0.592347 9.82744 0.839782C8.61521 0.659942 7.38243 0.659942 6.1702 0.839782C6.06353 0.584849 5.90353 0.26993 5.75876 0.0224943C5.75114 0.00749822 5.72828 0 5.70542 0C4.56254 0.19495 3.47298 0.532362 2.452 0.997242C2.44438 0.997242 2.43676 1.00474 2.42914 1.01224C0.356706 4.06395 -0.214738 7.03318 0.0671745 9.97242C0.0671745 9.98741 0.0747937 10.0024 0.0900322 10.0099C1.4615 10.9997 2.77963 11.5995 4.08252 11.9969C4.10538 12.0044 4.12824 11.9969 4.13586 11.9819C4.44063 11.5695 4.71492 11.1346 4.95112 10.6772C4.96636 10.6472 4.95112 10.6173 4.92064 10.6098C4.48634 10.4448 4.0749 10.2498 3.67108 10.0249C3.64061 10.0099 3.64061 9.96492 3.66346 9.94243C3.74728 9.88244 3.83109 9.81496 3.9149 9.75497C3.93014 9.73998 3.953 9.73998 3.96823 9.74748C6.58926 10.9247 9.416 10.9247 12.0066 9.74748C12.0218 9.73998 12.0446 9.73998 12.0599 9.75497C12.1437 9.82246 12.2275 9.88244 12.3113 9.94992C12.3418 9.97242 12.3418 10.0174 12.3037 10.0324C11.9075 10.2648 11.4884 10.4523 11.0541 10.6173C11.0237 10.6247 11.016 10.6622 11.0237 10.6847C11.2675 11.1421 11.5418 11.577 11.8389 11.9894C11.8618 11.9969 11.8846 12.0044 11.9075 11.9969C13.218 11.5995 14.5361 10.9997 15.9076 10.0099C15.9228 10.0024 15.9305 9.98741 15.9305 9.97242C16.2657 6.5758 15.3743 3.62906 13.5685 1.01224C13.5609 1.00474 13.5533 0.997242 13.538 0.997242ZM5.34732 8.18038C4.56254 8.18038 3.90728 7.46807 3.90728 6.59079C3.90728 5.71352 4.5473 5.0012 5.34732 5.0012C6.15496 5.0012 6.79498 5.72102 6.78736 6.59079C6.78736 7.46807 6.14734 8.18038 5.34732 8.18038ZM10.6579 8.18038C9.87316 8.18038 9.2179 7.46807 9.2179 6.59079C9.2179 5.71352 9.85792 5.0012 10.6579 5.0012C11.4656 5.0012 12.1056 5.72102 12.098 6.59079C12.098 7.46807 11.4656 8.18038 10.6579 8.18038Z"
                  fill="#F9F9F9"
                ></path>
              </svg>
            </Badge>
            <Badge className="flex items-center justify-center bg-[#F9F9F91A] hover:bg-[#F9F9F933] border-[#F9F9F94D] border-[0.5px] p-1 rounded-sm">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.400391 0H1.90039L10.9004 12H9.40039L0.400391 0ZM3.10039 0H4.60039L13.6004 12H12.1004L3.10039 0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1.59961 0H4.59961V1.2H1.59961V0ZM9.39961 12H12.3996V10.8H9.39961V12Z"
                  fill="#F9F9F9"
                ></path>
                <path
                  d="M10.9012 0H13.0012L2.80117 12H0.701172L10.9012 0Z"
                  fill="#F9F9F9"
                ></path>
              </svg>
            </Badge>
            <Badge className="flex items-center justify-center bg-[#F9F9F91A] hover:bg-[#F9F9F933] border-[#F9F9F94D] border-[0.5px] p-1 rounded-sm">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 0C11.0203 0 11.3594 0.140476 11.6095 0.390524C11.8595 0.640573 12 0.979711 12 1.33333V10.6667C12 11.0203 11.8595 11.3594 11.6095 11.6095C11.3594 11.8595 11.0203 12 10.6667 12H1.33333C0.979711 12 0.640573 11.8595 0.390524 11.6095C0.140476 11.3594 0 11.0203 0 10.6667V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0H10.6667ZM10.3333 10.3333V6.8C10.3333 6.2236 10.1044 5.6708 9.69678 5.26322C9.2892 4.85564 8.7364 4.62667 8.16 4.62667C7.59333 4.62667 6.93333 4.97333 6.61333 5.49333V4.75333H4.75333V10.3333H6.61333V7.04667C6.61333 6.53333 7.02667 6.11333 7.54 6.11333C7.78754 6.11333 8.02493 6.21167 8.19997 6.3867C8.375 6.56173 8.47333 6.79913 8.47333 7.04667V10.3333H10.3333ZM2.58667 3.70667C2.88371 3.70667 3.16859 3.58867 3.37863 3.37863C3.58867 3.16859 3.70667 2.88371 3.70667 2.58667C3.70667 1.96667 3.20667 1.46 2.58667 1.46C2.28786 1.46 2.00128 1.5787 1.78999 1.78999C1.5787 2.00128 1.46 2.28786 1.46 2.58667C1.46 3.20667 1.96667 3.70667 2.58667 3.70667ZM3.51333 10.3333V4.75333H1.66667V10.3333H3.51333Z"
                  fill="#F9F9F9"
                ></path>
              </svg>
            </Badge>
            <Badge className="flex items-center justify-center bg-[#F9F9F91A] hover:bg-[#F9F9F933] border-[#F9F9F94D] border-[0.5px] p-1 rounded-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_838_49577)">
                  <g clipPath="url(#clip1_838_49577)">
                    <path
                      d="M2.26489 12.9567H4.3778V7.82531L1.35938 5.56152V12.0512C1.35938 12.5522 1.76538 12.9567 2.26489 12.9567Z"
                      fill="#F9F9F9"
                    ></path>
                    <path
                      d="M11.623 12.9568H13.736C14.2371 12.9568 14.6415 12.5508 14.6415 12.0513V5.56152L11.623 7.82538"
                      fill="#F9F9F9"
                    ></path>
                    <path
                      d="M11.623 3.90132V7.82533L14.6415 5.56154V4.35401C14.6415 3.2342 13.3632 2.59577 12.4683 3.26741"
                      fill="#F9F9F9"
                    ></path>
                    <path
                      d="M4.37695 7.82544V3.9015L7.99908 6.61798L11.6212 3.90137V7.82538L7.99908 10.5421"
                      fill="#F9F9F9"
                    ></path>
                    <path
                      d="M1.35938 4.35401V5.56141L4.3778 7.82527V3.90132L3.53265 3.26741C2.63617 2.59577 1.35938 3.2342 1.35938 4.35401Z"
                      fill="#F9F9F9"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_838_49577">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_838_49577">
                    <rect
                      width="17"
                      height="17"
                      fill="white"
                      transform="translate(-0.5 -0.526367)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </Badge>
          </div>
        </div>
        <div className="rounded-xl bg-[#0f0f0f] p-3 text-sm">
          <div className="font-semibold text-lg text-white ">
            Invite friends!
          </div>
          <div className="text-white/60">
            Get 5,000 credits for each referral
          </div>
        </div>
      </div>

      <div className="px-2 p-4 grid grid-cols-5 gap-2 text-white/70">
        <DockIcon icon={<House className="h-4 w-4" />} />
        <DockIcon icon={<User className="h-4 w-4" />} />
        <DockIcon icon={<Grid3X3 className="h-4 w-4" />} />
        <DockIcon icon={<CreditCard className="h-4 w-4" />} />
        <DockIcon icon={<MessageCircle className="h-4 w-4" />} />
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
      className={`w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white/10 ${
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
