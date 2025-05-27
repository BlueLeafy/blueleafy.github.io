import { Contact } from "../../data";

interface IconProps {
    item: React.ComponentType;
}

function Icon({ item }: IconProps) {
    const IconComponent = item;
    return (
        <div>
            <IconComponent />
        </div>
    );
};

export default Icon;