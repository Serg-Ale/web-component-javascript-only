class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.createCard());
        shadow.appendChild(this.createStyles());
    }

    createCard() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = this.createCardLeft();
        const cardRight = this.createCardRight();

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    createCardLeft() {
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = this.createAuthor();
        const titleLink = this.createTitleLink();
        const newsContent = this.createNewsContent();

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titleLink);
        cardLeft.appendChild(newsContent);

        return cardLeft;
    }

    createCardRight() {
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = this.createNewsImage();
        cardRight.appendChild(newsImage);

        return cardRight;
    }

    createAuthor() {
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");
        return autor;
    }

    createTitleLink() {
        const titleLink = document.createElement("a");
        titleLink.textContent = this.getAttribute("title");
        titleLink.href = this.getAttribute("link-url");
        return titleLink;
    }

    createNewsContent() {
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        return newsContent;
    }

    createNewsImage() {
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("image-src") || "assets/images.png";
        newsImage.alt = this.getAttribute("image-alt") || "Image description";
        return newsImage;
    }

    createStyles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                margin: 100px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 15px;
                box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .card-left {
                max-width: 80%;
            }

            .card-left > a {
                display: block;
                margin: 2px 0 10px;
                font-weight: bold;
                font-size: 25px;
                color: black;
                text-decoration: none;
            }

            .card-left > p {
                text-align: justify;
            }

            .card-right {
                height: 80%;
                margin-left: 20px;
            }

            .card-right > img {
                width: 320px;
                height: 320px;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);
