const typing = {
    delete: function(element, speed = 100, bar = false, callback) {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        const text = el.textContent;
        let sliceCount = text.length;
        
        let interval = setInterval(() => {
            if (sliceCount > 0) {
                let val = text.slice(0, sliceCount);
                sliceCount--;
                el.textContent = bar ? val + "|" : val;
            } else {
                el.textContent = "";
                clearInterval(interval);
                if (callback) callback();
            }
        }, speed);
    },
    
    type: function(text, element, speed = 100, bar = false, callback) {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        const letters = [...text];
        let position = 0;
        let endstring = "";
        
        let int = setInterval(() => {
            if (position < letters.length) {
                endstring += letters[position];
                position++;
                el.textContent = bar ? endstring + "|" : endstring;
            } else {
                el.textContent = endstring;
                clearInterval(int);
                if (callback) callback();
            }
        }, speed);
    },

    create: function(element) {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        return {
            delete: function(speed, bar, callback) {
                typing.delete(el, speed, bar, callback);
            },
            type: function(text, speed, bar, callback) {
                typing.type(text, el, speed, bar, callback);
            }
        };
    }
};
