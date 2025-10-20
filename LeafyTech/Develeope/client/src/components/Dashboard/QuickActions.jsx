// components/Dashboard/QuickActions.jsx
import Card from "../Utils/Card";
import { Link } from "react-router-dom";

function QuickActions() {
    const actions = [
        { label: "Add product", path: "/crea-prodotto", icon: '' },
        { label: "Add new user", path: "/crea-user", icon: '' }, // or invite ???
    ];

    return (
        <Card elevated>
            <h3>Quick acitons</h3>
            <div>
                {actions.map((action, i) => (
                    <Link key={i} to={action.path}>
                        {action.label}
                    </Link>
                ))}
            </div>
        </Card>
    );
};

export default QuickActions;