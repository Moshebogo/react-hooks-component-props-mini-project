function Article ({title, date="January 1, 1970", preview, minutes}) {

    let minutesEmojis = ""
    if (minutes < 30) {
        const emojCount = Math.ceil(minutes / 5)
        minutesEmojis = "☕️".repeat(emojCount) + `  ${minutes} min read.`
    } else {
        const emojCount = Math.ceil(minutes / 10)
        minutesEmojis = "🍱".repeat(emojCount) + `  ${minutes} min read.`
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutesEmojis}</p>
        </article>
    )
}

export default Article