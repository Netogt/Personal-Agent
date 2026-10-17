import BrainSvg from "../svg/BrainSvg";
import SendSvg from "../svg/SendSvg";

export default function TextInput() {
    return (
        <div className="text-input">
            <input type="text" name="" id="" placeholder="Digite..." />
            <button className="btn-think">
                <BrainSvg />
            </button>
        </div>
    )
}