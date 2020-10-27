const BOOKMARK_KEY = 'user-bookmark'

export const handleSaveToLocalStorage = (name) => {

    if (!name) {
        return false
    }

    const bookmarkItem = localStorage.getItem(BOOKMARK_KEY);

    if (!bookmarkItem) {
        localStorage.setItem(BOOKMARK_KEY, JSON.stringify([name]))
    } else {
        let parseBookmark = []
        try {
            parseBookmark = JSON.parse(bookmarkItem)
        } catch (error) {
            console.error(error)
        }
        const isBookmarked = parseBookmark.includes(name)
        if (isBookmarked) {
            const removeItemArray = parseBookmark.filter(e => e !== name);
            localStorage.setItem(BOOKMARK_KEY, JSON.stringify(removeItemArray))

            window.location.reload()
        } else {
            parseBookmark.push(name)
            const removeDuplicate = [...new Set(parseBookmark)];
            localStorage.setItem(BOOKMARK_KEY, JSON.stringify(removeDuplicate))

            window.location.reload()
        }
    }
}

export const isBookmarked = (name) => {
    if (!name) {
        return false
    }

    const bookmarkItem = localStorage.getItem(BOOKMARK_KEY);

    if (!bookmarkItem) {
        return false
    } else {
        let parseBookmark = []
        try {
            parseBookmark = JSON.parse(bookmarkItem)
        } catch (error) {
            console.error(error)
            return false
        }
        const isBookmarked = parseBookmark.includes(name)

        return isBookmarked
    }
}