function UnReadMessages(props) {
   const {unReadMessages} = props
    return ( 
        <>
        {
            unReadMessages.length > 0 && 
            <h1>You have {unReadMessages.length} unread messages.</h1>
        }
        </>
     );
}

export default UnReadMessages;