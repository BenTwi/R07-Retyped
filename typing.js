const typing = {
    _sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
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

    // Used by the BenTwi.app Chat Widget to display Chat Messages with Emotes
    typeFragments: async function(fragments, element, speed = 50, callback) {
    const el = typeof element === "string" ? document.querySelector(element) : element;
    el.innerHTML = "";

    for (const frag of fragments) {
      if (frag.type === "text") {
        const textSpan = document.createElement("span");
        el.appendChild(textSpan);
        
        const letters = [...frag.text];
        for (const char of letters) {
          textSpan.textContent += char;
          await this._sleep(speed);
        }
      } 
      else if (frag.type.includes("emote")) {
        const imgUrl = frag.emote?.image_url_2x || frag.emote?.image_url_1x;
        if (!imgUrl) continue;

        const img = document.createElement("img");
        img.className = `bentwi-app bentwi-chat bentwi-chat-emote emote-id-${frag.emote.id} set-id-${frag.emote.emote_set_id} owner-id-${frag.emote.owner_id} format-type-${frag.emote.format}`
        img.src = imgUrl;
        
        img.style.verticalAlign = "middle";
        img.style.margin = "0 4px";
        img.style.transform = "scale(0) rotate(45deg)";
        img.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        
        el.appendChild(img);
          
        void img.offsetWidth; 
        img.style.transform = "scale(1) rotate(0deg)";
        await this._sleep(speed * 2); 
      }
    }

    if (callback) callback();
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
