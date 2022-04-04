<template>
  <div id="pdfDom" v-html="htmlText">

  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
  data() {
    return {
      title: 'html2canvastest',
      htmlText: `<!DOCTYPE html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="keywords" content="">
		
        <style>
             a[title=站长统计]
            {
            display: none;
            }
            </style>
    </head>
    <body><style type="text/css">
    .invoice-head{
        border-bottom: 1px solid #333;
        margin: 30px 0px 10px;
        padding-bottom: 10px;
        font-size: 12px;
    }
    .msg-left{
        display: table;
        height: 108px;
        float: left;
        margin-left: 40px;
        position: relative;
        color: #333;
        line-height: 18px;
        max-width: calc(100% - 400px);
    }
    .msg-left:before{
        content: "";
        width: 1px;
        height: 80%;
        background: #333;
        position: absolute;
        left:-20px;
        top: 10%;
    }
    .msg-left .box{
        display: table-cell;
        vertical-align: middle;
    }
    .msg-right{
        float: right;
         color: #333;
    }
    .invoice-msg{
        font-size: 12px;
        /*margin: 0 20px;*/
        color: #333;
        line-height: 22px;
    }
    .claim-table-box .bootstrap-table .table{
        border: 1px solid #f5f5f5;
    }
    .claim-table-box .bootstrap-table .table>tbody>tr>td{
         padding: 10px 8px;
    }
    .fixed-table-body{
        min-height: inherit;
    }
    .form-loading{
        max-width: 110px;
    }
    .price-box{
        font-size: 12px;
        line-height: 20px;
        text-align: right;
        margin: 0 20px;
        color: #666;
    }
    .name{
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 15px;
    }
    .price{
        display: inline-block;
        width: 125px;
        text-align: left;
    }
    /** 销售V3.2.5 start*/
    .img-style {
        min-width: 100px;
        width: auto;
        max-width: 170px;
    }
    .bill {
        font-size: 14px;
        color: #333;
    }
    .bill-to-content .img-style {
        min-width: 100px;
        width: auto;
        max-width: 170px;
        opacity: 0;
    }
    .bill-to-content .bill-to {
        float: left;
        margin-left: 40px;
    }
    .claim-table-box {
        clear: both;
    }
    .system-table thead tr{
        background-color: #27b7d0;
        color: #fff;
    }
    .system-table thead tr th{
        padding: 8px;
    }
    .system-table tbody tr td{
        padding: 10px;
    }
    /** 销售V3.2.5 end */
</style>

<div class="invoice-head clearfix">
<!--        <img width="170" height="100" class="fl" src="https://captainbiimagebucket.s3.cn-northwest-1.amazonaws.com.cn/304/invoice_20220224144235720.png">-->
        <img height="100" class="fl img-style" src="https://captainbiimagebucket.s3.cn-northwest-1.amazonaws.com.cn/304/invoice_20220224144235720.png">
        <div class="msg-left">
            <div class="box">
                <p class="bold bill">BILL FROM</p>
                <p>测试发票2</p>
                <P>和平路115 ES87</P>
                <P>喝啊,啊啊,土耳其&nbsp;&nbsp;23156123</P>
                <P>155548671222&nbsp;125555@qq.com</P>
            </div>
        </div>
        <div class="msg-right">
            <p class="f30">INVOICE<p>
            <p class="tr">VAT CODE:TR23153123</p>
            <p class="tr">INVOICE #：403-0952847-8238734</p>
            <p class="tr">DATE:23/12/2021</p>
        </div>
    </div>
    <div class="invoice-msg bill-to-content">
        <img height="100" class="fl img-style" src="https://captainbiimagebucket.s3.cn-northwest-1.amazonaws.com.cn/304/invoice_20220224144235720.png">
        <div class="bill-to">
            <p class="bold bill">BILL TO</p>
            <p>YAHYA LEVENT KONAC</p>
            <p>NORM ELEKTRONIK A.Ş. ATB IS MERKEZI G-BLOK NR:189-190<br>Ankara,,Macun Mh.&nbsp;&nbsp;06374</p>
        </div>
    </div>
     <div class="claim-table-box mb10">
        <table id="list" class="system-table table table-hover" border>
            <thead>
                <tr>
                    <th class="pl20" style="text-align: left; vertical-align: middle; width: 30%; ">
                        Description
                    </th>
                    <th style="text-align: center; vertical-align: middle; ">
                        Quantity
                    </th>
                    <th style="text-align: center; vertical-align: middle; ">
                        Price(excl.)
                    </th>
                    <th style="text-align: center; vertical-align: middle; ">
                        Shipping
                    </th>
                    <th style="text-align: center; vertical-align: middle; ">
                        Promotion
                    </th>
                                        <th style="text-align: center; vertical-align: middle; ">
                        VAT%
                    </th>
                    <th style="text-align: center; vertical-align: middle; ">
                        VAT
                    </th>
                                        <th style="text-align: center; vertical-align: middle; ">
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                                <tr>
                    <td class="pl20" style="text-align: left; vertical-align: middle; width: 30%; ">SMALLRIG Cage Canon EOS M50, M50 II ve M5 için entegre sapl&#x131; - 2168</td>
                    <td style="text-align: center; vertical-align: middle; ">1</td>
                    <td style="text-align: center; vertical-align: middle; ">₺&nbsp;&nbsp;593.97</td>
                    <td style="text-align: center; vertical-align: middle; ">₺&nbsp;30.10</td>
                    <td style="text-align: center; vertical-align: middle; ">-₺&nbsp;0</td>
                                        <td style="text-align: center; vertical-align: middle; ">16%</td>
                    <td style="text-align: center; vertical-align: middle; ">₺&nbsp;95.03</td>
                                        <td style="text-align: center; vertical-align: middle; ">₺&nbsp;719.1</td>
                </tr>
                            </tbody>
        </table>
    </div>
    <div class="price-box">
        <p><label class="name">Price(excl.)</label> <span class="price">&nbsp;₺&nbsp;593.97</span></p>
        <p><label class="name">Shipping</label> <span class="price">&nbsp;₺&nbsp;30.10</span></p>
        <p><label class="name">Promotion</label> <span class="price">-₺&nbsp;0</span></p>
                <p><label class="name">VAT Total</label> <span class="price">&nbsp;₺&nbsp;95.03</span></p>
                <p class="black bold"><label class="name">Grand Total</label> <span class="price">&nbsp;₺&nbsp;719.10</span></p>
    </div>
</body>
</html>`
    }
  },

  mounted() {
    // this.getPdf()
  },

  methods: {
    getPdf () {
      html2Canvas(document.querySelector('#pdfDom'), {
        useCORS: true
      }).then(canvas => {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(this.title + '.pdf')
      }
      )
    },
  }
}
</script>

<style type="text/css">
.invoice-head {
  border-bottom: 1px solid #333;
  margin: 30px 0px 10px;
  padding-bottom: 10px;
  font-size: 12px;
}
.msg-left {
  display: table;
  height: 108px;
  float: left;
  margin-left: 40px;
  position: relative;
  color: #333;
  line-height: 18px;
  max-width: calc(100% - 400px);
}
.msg-left:before {
  content: "";
  width: 1px;
  height: 80%;
  background: #333;
  position: absolute;
  left: -20px;
  top: 10%;
}
.msg-left .box {
  display: table-cell;
  vertical-align: middle;
}
.msg-right {
  float: right;
  color: #333;
}
.invoice-msg {
  font-size: 12px;
  /*margin: 0 20px;*/
  color: #333;
  line-height: 22px;
}
.claim-table-box .bootstrap-table .table {
  border: 1px solid #f5f5f5;
}
.claim-table-box .bootstrap-table .table > tbody > tr > td {
  padding: 10px 8px;
}
.fixed-table-body {
  min-height: inherit;
}
.form-loading {
  max-width: 110px;
}
.price-box {
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  margin: 0 20px;
  color: #666;
}
.name {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 15px;
}
.price {
  display: inline-block;
  width: 125px;
  text-align: left;
}
/** 销售V3.2.5 start*/
.img-style {
  min-width: 100px;
  width: auto;
  max-width: 170px;
}
.bill {
  font-size: 14px;
  color: #333;
}
.bill-to-content .img-style {
  min-width: 100px;
  width: auto;
  max-width: 170px;
  opacity: 0;
}
.bill-to-content .bill-to {
  float: left;
  margin-left: 40px;
}
.claim-table-box {
  clear: both;
}
.system-table thead tr {
  background-color: #27b7d0;
  color: #fff;
}
.system-table thead tr th {
  padding: 8px;
}
.system-table tbody tr td {
  padding: 10px;
}
/** 销售V3.2.5 end */
</style>