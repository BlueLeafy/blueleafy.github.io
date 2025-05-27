import { IconType } from "react-icons";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";


// types/contact.d.ts
export interface Contact {
    id: string;
    label: string;
    title: string;
    path: string;
    icon: IconType; // Strongly typed icon names
    color: string;
    backG?: string;
    type: 'email' | 'social' | 'other';
    visibility: 'public' | 'private';
    order: number;
    external?: boolean;
    ariaLabel?: string;
}

export const ContactsData: Contact[] = [
    {
        id: "1",
        label: "Email",
        title: "memo.erika@yahoo.co.uk",
        path: "mailto:memo.erika@yahoo.co.uk",
        icon: MdEmail,
        color: "text-white",
        backG: "bg-red-800",
        type: "email",
        visibility: "public",
        order: 1,
        external: true,
        ariaLabel: "Send email to memo.erika@yahoo.co.uk"
    },
    {
        id: "2",
        label: "LinkedIn",
        title: "Erika Memo",
        path: "https://www.linkedin.com/in/erika-memo-0135b31b6",
        icon: FaLinkedinIn,
        color: "text-blue-500",
        type: "social",
        visibility: "public",
        order: 2,
        external: true,
        ariaLabel: "Visit our Facebook page"
    },
    {
        id: "4",
        label: "GitHub",
        title: "blueleafy.github.io",
        path: "https://blueleafy.github.io/",
        icon: IoLogoGithub,
        color: "text-red-500",
        type: "social",
        visibility: "public",
        order: 4,
        external: true
    }
] as const;