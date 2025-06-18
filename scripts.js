const convertButton = document.querySelector(".converter")


function convertRD(){
    const entry = document.querySelector("#moeda1")
    const output = document.querySelector("#moeda2")
    const moeda1Nome = document.querySelector("#moeda1_nome")
    const moeda2Nome = document.querySelector("#moeda2_nome")
    const moeda1Valor = document.querySelector(".moeda1_valor")
    const moeda2Valor = document.querySelector(".moeda2_valor")
    const entryValue = document.querySelector("#valor1").value
    const moeda1Img = document.querySelector(".moeda1_img")
    const moeda2Img = document.querySelector(".moeda2_img")

    const realToday = 1
    const dolarToday = 5
    const euroToday = 6
    const libraToday = 7
    const bitcoinToday = 200000

    
    moeda1Nome.innerHTML = entry.value
    moeda2Nome.innerHTML = output.value

    if(entry.value == "real"){
        moeda1Img.src = './img/Real.png'
        moeda1Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(entryValue)

            if(output.value == "dolar"){
                moeda2Img.src = './img/Dolar.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(entryValue / dolarToday)
            }
            if(output.value == "libra"){
                moeda2Img.src = './img/Libra.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(entryValue / libraToday)
            }
            if(output.value == "euro"){
                moeda2Img.src = './img/Euro.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(entryValue / euroToday)
            }
            if(output.value == "bitcoin"){
                moeda2Img.src = './img/bitcoin.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(entryValue / bitcoinToday)
            }
            if(output.value == "real"){
                moeda2Img.src = './img/Real.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(entryValue / realToday)
    }}

    if(entry.value == "bitcoin"){
        moeda1Img.src = './img/bitcoin.png'
        moeda1Valor.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(entryValue)

            if(output.value == "dolar"){
                moeda2Img.src = './img/Dolar.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format((entryValue*bitcoinToday) / dolarToday)
            }
            if(output.value == "libra"){
                moeda2Img.src = './img/Libra.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format((entryValue*bitcoinToday) / libraToday)
            }
            if(output.value == "euro"){
                moeda2Img.src = './img/Euro.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format((entryValue*bitcoinToday) / euroToday)
            }
            if(output.value == "bitcoin"){
                moeda2Img.src = './img/bitcoin.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format((entryValue*bitcoinToday) / bitcoinToday)
            }
            if(output.value == "real"){
                moeda2Img.src = './img/Real.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format((entryValue*bitcoinToday) / realToday)
    }}

    if(entry.value == "dolar"){
        moeda1Img.src = './img/Dolar.png'
        moeda1Valor.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(entryValue)

            if(output.value == "dolar"){
                moeda2Img.src = './img/Dolar.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format((entryValue*dolarToday) / dolarToday)
            }
            if(output.value == "libra"){
                moeda2Img.src = './img/Libra.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format((entryValue*dolarToday) / libraToday)
            }
            if(output.value == "euro"){
                moeda2Img.src = './img/Euro.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format((entryValue*dolarToday) / euroToday)
            }
            if(output.value == "bitcoin"){
                moeda2Img.src = './img/bitcoin.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format((entryValue*dolarToday) / bitcoinToday)
            }
            if(output.value == "real"){
                moeda2Img.src = './img/Real.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format((entryValue*dolarToday) / realToday)
    }}

    if(entry.value == "libra"){
        moeda1Img.src = './img/Libra.png'
        moeda1Valor.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(entryValue)

            if(output.value == "dolar"){
                moeda2Img.src = './img/Dolar.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format((entryValue*libraToday) / dolarToday)
            }
            if(output.value == "libra"){
                moeda2Img.src = './img/Libra.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format((entryValue*libraToday) / libraToday)
            }
            if(output.value == "euro"){
                moeda2Img.src = './img/Euro.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format((entryValue*libraToday) / euroToday)
            }
            if(output.value == "bitcoin"){
                moeda2Img.src = './img/bitcoin.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format((entryValue*libraToday) / bitcoinToday)
            }
            if(output.value == "real"){
                moeda2Img.src = './img/Real.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format((entryValue*libraToday) / realToday)
    }}

    if(entry.value == "euro"){
        moeda1Img.src = './img/Euro.png'
        moeda1Valor.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(entryValue)

            if(output.value == "dolar"){
                moeda2Img.src = './img/Dolar.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format((entryValue*euroToday) / dolarToday)
            }
            if(output.value == "libra"){
                moeda2Img.src = './img/Libra.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format((entryValue*euroToday) / libraToday)
            }
            if(output.value == "euro"){
                moeda2Img.src = './img/Euro.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format((entryValue*euroToday) / euroToday)
            }
            if(output.value == "bitcoin"){
                moeda2Img.src = './img/bitcoin.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format((entryValue*euroToday) / bitcoinToday)
            }
            if(output.value == "real"){
                moeda2Img.src = './img/Real.png'
                moeda2Valor.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format((entryValue*euroToday) / realToday)
    }}
}
convertButton.addEventListener("click", convertRD)