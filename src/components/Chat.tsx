import "../css/chat.css"
export default function Chat() {

    return (
        <section className="holo-messages-flow" id="messages-flow">
            {[1,1,1,1].map(() =>
                <>
                <div className="message-row user">
                    <div className="user-bubble-wrapper">
                        <div className="user-bubble">Faça uma análise de segurança e proteção de privacidade para meus dados digitais.</div>
                        <div className="user-meta">
                            <span className="meta-time">22:47</span>
                        </div>
                    </div>
                </div>
                <div className="message-row agent" >
                    <div className="agent-bubble-wrapper">
                        <div className="agent-bubble" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nemo eum, sint cum deleniti, numquam fugiat sequi laborum asperiores fugit ipsum! Dolorem mollitia quos dolor error tempore odio voluptates consectetur.
                        </div>
                        <div className="agent-action-bar">
                            <button className="bubble-action-btn copy-btn" data-id="id_gq7y07r2e" title="Copiar resposta">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                Copiar
                            </button>
                            <button className="bubble-action-btn speech-btn" data-id="id_gq7y07r2e" title="Voz Neural">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                Ouvir
                            </button>
                            <button className="bubble-action-btn like-btn" title="Avaliar resposta">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                            </button>
                            <span className="agent-time">22:47</span>
                        </div>
                    </div>
                </div>
                </>
            )}
            
            <div className="message-row agent">
                <div className="agent-bubble-wrapper">
                    <div className="agent-bubble" id="bubble-${msg.id}">
                        <div className="holo-wave-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}