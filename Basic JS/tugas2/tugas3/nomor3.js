const VOUCHER_DISKON_50 = "FAZZFOOD50"
const VOUCHER_DISKON_60 = "DITRAKTIR60"


/**
 *
 * @param {number} totalPrice
 * @param {VOUCHER_DISKON_50 || VOUCHER_DISKON_60} voucher
 * @param {number} distance
 * @param {boolean} isTax
 * @returns {string}
 * @constructor
 */
function FazzFood(totalPrice, voucher, distance, isTax) {

    const tempTotalDiscount = totalDiscount(totalPrice, voucher)
    const tempDeliveryFee = deliveryFee(distance)
    const tempFeeTax = feeTax(totalPrice - tempTotalDiscount, isTax)
    const subTotal = totalPrice - tempTotalDiscount + tempDeliveryFee + tempFeeTax

    return `
     Harga: ${totalPrice}
     Potongan: ${tempTotalDiscount}
     Biaya Antar: ${tempDeliveryFee}
     Pajak: ${tempFeeTax}
     SubTotal: ${subTotal}
    `
}


function deliveryFee(distance) {
    const nextDistance = distance - 2
    let rates = 5000
    if (nextDistance <= 0) {
        return rates
    }
    return rates += nextDistance * 3000
}


function feeTax(totalPrice, isTaxed) {
    return isTaxed ? totalPrice * 0.05 : 0
}

function totalDiscount(totalPrice, voucher) {
    const voucherArr = [
        {
            voucher: VOUCHER_DISKON_50,
            minPurchase: 50000,
            maxDiscount: 50000,
            totalDiscount: 0.5
        },
        {
            voucher: VOUCHER_DISKON_60,
            minPurchase: 25000,
            maxDiscount: 30000,
            totalDiscount: 0.6
        }
    ]

    const selectedVoucher = voucherArr.find(discount => discount.voucher === voucher)

    if (totalPrice < selectedVoucher.minPurchase) {
        return 0
    }

    return Math.min(selectedVoucher.maxDiscount, totalPrice * selectedVoucher.totalDiscount)
}

console.log(FazzFood(75000, VOUCHER_DISKON_50, 5, true));