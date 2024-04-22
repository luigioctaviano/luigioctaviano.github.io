<template>
    <section class="contact-container" id="getInTouch">
        <div class="contact-items-container">
            <div class="contact-text-container">
                <div class="contact-text-description">
                    <h4 class="contact-text-title">Get in touch!</h4>
                    <p class="contact-text-subtitle">Feel free to contact me via email or my professional accounts if you are interested in my works and expertise.</p>
                </div>
                <br>
                <div class="contact-text-buttons"></div>
            </div>
            <div class="contact-buttons-container">
                <div class="contact-buttons">
                    <button onclick="location.href='mailto:luigioctaviano@gmail.com'" class="contact-button contact-email-button">Send Email</button>
                    <button class="contact-button contact-download-button">Download my CV</button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.contact-container {
    height: auto;
    background: #F5F5F5;
    color: #000;
}

.contact-items-container {
    display: flex;
    flex-direction: column;
    height: inherit;
}

.contact-text-container {
    width: 100%;
    height: inherit;
    display: flex;
}

.contact-buttons-container {
    width: 100%;
    height: inherit;
    display: flex;
}

.contact-text-description {
    margin: auto;
    padding: 25px;
    text-align: center;
}

.contact-text-title {
    font-size: 30px;
    font-weight: bold;
}

.contact-text-subtitle {
    font-size: 20px;
}

.contact-button {
    padding: 15px 30px;
    border: 1px solid #18A0FB;
    border-radius: 5px;
    font-family: 'Montserrat';
    cursor: pointer;
    font-size: 17px;
}

.contact-email-button  {
    padding: 15px 45px;
    background: #18A0FB;
    color: #FFF;
    margin-bottom: 25px;
}

.contact-download-button {
    background: #FFF;
    color: #18A0FB;
    margin-bottom: 25px;
}

.contact-buttons {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
}

@media only screen and (min-width: 768px) {
    .contact-buttons {
        text-align: left;
        flex-direction: row;
        margin-bottom: 20px;
    }

    .contact-email-button  {
        margin-right: 45px;
    }
}

@media only screen and (min-width: 992px) {
    .contact-text-title {
        font-size: 45px;
    }

    .contact-text-subtitle {
        font-size: 25px;
    }
}

@media only screen and (min-width: 1200px) {
    .contact-container {
        height: 300px;
    }

    .contact-items-container {
        flex-direction: row;
    }

    .contact-text-container {
        width: 65%;
    }

    .contact-buttons-container {
        width: 35%;
    }

    .contact-text-description {
        padding: 0 80px;
        text-align: left;
    }

    .contact-email-button  {
        margin-right: 45px;
        margin-bottom: unset;
    }

    .contact-download-button {
        margin-bottom: unset;
    }

    .contact-buttons {
        margin-bottom: unset;
        margin: auto;
    }
}
</style>