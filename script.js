$(document).ready(() => {
    const alkali = $(".alkali"); // alkali metal
    const alkaline = $(".alkaline"); // alkaline metal
    const transition = $(".transition"); // transition metal
    const basic = $(".basic"); // basic metal
    const semi = $(".semi"); // semi metal
    const non = $(".non"); // non metal
    const halogen = $(".halogen"); // halogen
    const nobel = $(".nobel"); // nobel gas
    const lanthanide = $(".lanthanide"); // lanthanide
    const actinide = $(".actinide"); // actinide


    // following functions are responsible for the change in css of table boxes when hover upon
    alkali.hover((event) => {
        alkali.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#c75f7f", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        alkali.css({ "background": "#E47A9A", "border": "1px solid", "border-color": "#aa0033" });
    });

    alkaline.hover((event) => {
        alkaline.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#bfa42a", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        alkaline.css({ "background": "#EBD366", "border": "1px solid", "border-color": "#9c8d4b" });
    });

    transition.hover((event) => {
        transition.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#c7b16b", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        transition.css({ "background": "#FFE89D", "border": "1px solid", "border-color": "#c49e21" });
    });

    basic.hover((event) => {
        basic.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#2fbd46", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        basic.css({ "background": "#61FF7B", "border": "1px solid", "border-color": "#00c020" });
    });

    semi.hover((event) => {
        semi.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#3e9bc2", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        semi.css({ "background": "#66D3FF", "border": "1px solid", "border-color": "#0096d1" });
    });

    non.hover((event) => {
        non.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#0262ab", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        non.css({ "background": "#38A9FF", "border": "1px solid", "border-color": "#005ba1" });
    });

    halogen.hover((event) => {
        halogen.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#4732d1", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        halogen.css({ "background": "#6048FF", "border": "1px solid", "border-color": "#3824b6" });
    });

    nobel.hover((event) => {
        nobel.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#7b6296", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        nobel.css({ "background": "#B19DC7", "border": "1px solid", "border-color": "#694096" });
    });

    lanthanide.hover((event) => {
        lanthanide.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#785625", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        lanthanide.css({ "background": "#9F7537", "border": "1px solid", "border-color": "#794c09" });
    });

    actinide.hover((event) => {
        actinide.css({ "borderWidth": "2px", "borderColor": "black", "backgroundColor": "#cf7727", "transition": "0.2s" });
        $(event.currentTarget).css({ "borderWidth": "3.5px", "borderColor": "black", "backgroundColor": "white" });
    }, () => {
        actinide.css({ "background": "#FF9A3F", "border": "1px solid", "border-color": "#c05a00" });
    });
});