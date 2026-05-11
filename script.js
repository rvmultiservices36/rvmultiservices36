const documents = {
    "आधार सेवा": [
        "आधार कार्ड",
        "मोबाईल नंबर"
    ],

    "पॅन कार्ड": [
        "आधार कार्ड",
        "फोटो",
        "मोबाईल नंबर"
    ],

    "AEPS सेवा": [
        "आधार कार्ड",
        "बँक खाते"
    ],

    "बँकिंग सेवा": [
        "आधार कार्ड",
        "पॅन कार्ड",
        "मोबाईल नंबर"
    ],

    "मोबाईल रिचार्ज": [
        "मोबाईल नंबर"
    ],

    "लोन सेवा": [
        "आधार कार्ड",
        "पॅन कार्ड",
        "बँक स्टेटमेंट",
        "फोटो"
    ]
};

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const service =
            card.querySelector("h3").innerText;

        const docs =
            documents[service];

        let message =
            "सेवा : " + service + "\n\n";

        message +=
            "आवश्यक कागदपत्रे:\n";

        docs.forEach(doc => {
            message += "• " + doc + "\n";
        });

        alert(message);

        const whatsappMessage =
            encodeURIComponent(message);

        window.open(
            "https://wa.me/918605943636?text=" +
            whatsappMessage,
            "_blank"
        );

    });

});
