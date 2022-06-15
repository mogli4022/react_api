import UnReadMessages from "./UnReadMessages";

const message = ["hello", "Hy", "Good Morning", "Good Night", "Hey!"]

function MailBox() {
    return ( 
        <>
        <h1>Mail Box</h1>
        <UnReadMessages unReadMessages={message}/>
        </>
     );
}

export default MailBox;