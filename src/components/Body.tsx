import Avatar from "./Avatar";
import Chat from "./Chat";
import "../css/body.css"

export default function Body(){
    return (
        <section className="main-section">
            <Avatar />
            <Chat />
        </section>
    );
}