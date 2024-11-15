const insert = document.getElementById('insert')

// Lets just practice mouse events first

insert.addEventListener('mouseenter', function(){
    insert.style.backgroundColor = 'red'
})

insert.addEventListener('mouseleave', function(){
    insert.style.backgroundColor = 'lightblue'
})

    // We will append child to the insert which display the Key pressed

// Note that there are 3 types of keyboard events that can be tracked
   
    // 1. keydown : Triggered when a key is first pressed down
    // 2. keypress : Triggered when a key is pressed down and then released
                 // Its outdated DONT USE it, you only need up and down
    // 3. keyup : Triggered when a key is released


// When these events takeplace, an event object is created with
    // properties that give inforn regarding the event

    // event.key: Returns the key that was pressed,
        //  e.g., "Enter", "a", or "Escape".

    // event.code: Represents the physical key code, like "KeyA", "ArrowUp",
        // which remain consistent regardless of keyboard language

    // event.altKey, event.ctrlKey, event.shiftKey, and event.metaKey: 
        // Boolean properties indicating whether these keys were held down 
        // during the event. Useful for creating keyboard shortcuts.

// IMP: keyboard events can be tracked when trigged within some parts
    // of the webpage, This is done by adding event listeners to specific
    // DOM element and setting the event type to the required key event
    // and the callback inside as we know, can take e param, containing
    // event object, which can be used to access key event properites 

// ----------------------------------------------------

// IMP : We can add keyboard eventlisteners as long as that element 
    // can receive focus or is interactive. For example, you can attach
    // a keydown event listener to a text input (<input>), a div with 
    // tabindex

// First lets just apply the event listener to entire document
// which tracks entire page's events
  
    document.addEventListener('keydown', function(e){
        // This executes when key is pressed down

        const message = document.getElementById('placeholder')
        message.innerHTML = `${e.key} , ${e.keyCode}, ${e.code}`
        message.style.padding = '10px'
        message.style.backgroundColor = 'grey'
        message.style.fontSize = '3em'
        message.style.marginTop = '5px'

        if(e.ctrlKey){
            message.innerHTML = 'Wow! CTRL pressed'
        }
        if(e.altKey){
            message.innerHTML = 'Wow! ALT pressed'
        }
        
    })

// NOTE that we cant add the keyboard event listener to elemnt like
    // insert div yet since its not focusable. Since its div we can
    // make it work by adding tabindex attribute

// What is tabindex ?
    // tabindex is an HTML attribute that defines the order in which 
    // elements are focused when a user navigates through a webpage using
    // the Tab key. It controls both keyboard focus order and whether an 
    // element can receive focus at all. Its values are :
    
    // "0": The element becomes focusable and follows the natural tab order. 
    // useful for elements that aren’t normally focusable, like <div>
   
    // tabindex="-1": The element is focusable programmatically but skipped
    // in the tabbing order.
    
    // tabindex="positive number": Elements with a positive tabindex will be 
    // focused before elements with tabindex="0", in the order specified 
    // by the number

// Lets try by chaning <div id="insert" tabindex="0">...</div>
    // and changing document to insert

    // insert.addEventListener('keydown', function(e){
    //     // This executes when key is pressed down

    //     const message = document.getElementById('placeholder')
    //     message.innerHTML = e.key
    //     message.style.padding = '10px'
    //     message.style.backgroundColor = 'grey'
    //     message.style.fontSize = '3em'
    //     message.style.marginTop = '5px'

    //     if(e.ctrlKey){
    //         message.innerHTML = 'Wow! CTRL pressed'
    //     }
    //     if(e.altKey){
    //         message.innerHTML = 'Wow! ALT pressed'
    //     }
        
    // })

// It works. 
