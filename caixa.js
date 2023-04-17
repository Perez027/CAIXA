function compra(name, value, firstPurchase, payment) {
    firstPurchase == "sim" || firstPurchase == "não"
    payment == "dinheiro" || payment == "cartão" || payment == "pix"
    if (firstPurchase && payment == "dinheiro" || payment == "pix") {
        if (value >= 1000 && payment) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.25).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (!firstPurchase && payment == "dinheiro" || payment =="pix") {
        if (value >= 1000) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.25).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (firstPurchase && !payment == "dinheiro" || payment == "pix") {
        if (value >= 1000) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}

            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}

            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${value * 0.25}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (!firstPurchase && !payment == "dinheiro" || payment == "pix") {
        console.log(
        `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${value * (Math.random() * ((20 - 10) + 10))}
            Total com desconto: R$${(value) - (value * (Math.random() * ((20 - 10) + 10)))}
            
            Agradeçemos a preferencia,
            volte sempre!`)
    }









    if (firstPurchase && payment == "cartão") {
        if (value >= 1000 && payment) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.25).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (!firstPurchase && payment == "cartão") {
        if (value >= 1000 && payment) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.25).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (firstPurchase && !payment == "cartão") {
        if (value >= 1000 && payment) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.3).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.3)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value <= 500) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.2).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.2)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else if (value >= 501 && value <= 999) {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            valor total da compra: R$${value}
            Desconto : R$${(value * 0.25).toFixed(2)}
            Total com desconto: R$${((value) - (value * 0.25)).toFixed(2)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
        else {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${payment}
            Primeira compra: ${firstPurchase}
            valor total da compra: R$${value}
            Desconto para a proxima compra: ${(Math.random() * (20 - 10) + 10).toFixed(0)}
            
            Agradeçemos a preferencia,
            volte sempre!`)
        }
    }

    if (!firstPurchase && !payment == "cartão") {
            console.log(
            `Cliente: ${name}
            Forma de pagamento: ${!payment}
            Primeira compra: ${!firstPurchase}
            valor total da compra: R$${value}
            Desconto : R$${value * (Math.random() * ((20 - 10) + 10))}
            Total com desconto: R$${(value) - (value * (Math.random() * ((20 - 10) + 10)))}
            
            Agradeçemos a preferencia,
            volte sempre!`)
    }
    return compra
}



compra()