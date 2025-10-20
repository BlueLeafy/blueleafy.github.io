// HomePage.jsx (homepage)
import Button from "../../components/Utils/Button";

function HomePage() {
    return (
        <>
            <div>
                <Button primary>
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary>
                    Secondary
                </Button>
            </div>
            <div>
                <Button danger>
                    Danger
                </Button>
            </div>
            <div>
                <Button warning>
                    Warning
                </Button>
            </div>
            <div>
                <Button outlined>
                    Outlined
                </Button>
            </div>
            <div>
                <Button text>
                    Text
                </Button>
            </div>

        </>
    );
};

export default HomePage;