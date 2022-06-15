import fetch from 'node-fetch'
import cheerio from 'cheerio'
import fs from 'fs/promises'

const neweOffres = []
async function fetchData(url){
    try{
    const reponse = await fetch(url)
    const data = await reponse.text()
    getOffre(data)
    } catch(error) {
    console.error(error)
    }
}
fetchData("https://www.asie-online.com/")
fetchData("https://www.asie-online.com/vietnam/")
fetchData("https://www.asie-online.com/japon/")
fetchData("https://www.asie-online.com/dubai-abu-dhabi/")
fetchData("https://www.asie-online.com/jordanie/")
fetchData("https://www.asie-online.com/voyage-asie-ocean-indien/")
fetchData("https://www.asie-online.com/bali/")
fetchData("https://www.asie-online.com/bhoutan/")
fetchData("https://www.asie-online.com/birmanie/")
fetchData("https://www.asie-online.com/cambodge/")
fetchData("https://www.asie-online.com/chine/")
fetchData("https://www.asie-online.com/coree-du-sud/")
fetchData("https://www.asie-online.com/inde/")
fetchData("https://www.asie-online.com/indonesie/")
fetchData("https://www.asie-online.com/laos/")
fetchData("https://www.asie-online.com/malaisie/")
fetchData("https://www.asie-online.com/maldives/")
fetchData("https://www.asie-online.com/mongolie/")
fetchData("https://www.asie-online.com/nepal/")
fetchData("https://www.asie-online.com/ouzbekistan/")
fetchData("https://www.asie-online.com/philippines/")
fetchData("https://www.asie-online.com/sri-lanka/")
fetchData("https://www.asie-online.com/taiwan/")
fetchData("https://www.asie-online.com/thailande/")
fetchData("https://www.asie-online.com/voyage-oceanie-pacifique/")
fetchData("https://www.asie-online.com/australie/")
fetchData("https://www.asie-online.com/nouvelle-zelande/")
fetchData("https://www.asie-online.com/tahiti-et-ses-iles/")


fetchData("http://www.algerie-tours.com/default.aspx/")
fetchData("https://www.skylink-travel.com/agence-voyage-organise-depart-oran-alger/")
fetchData("https://www.dunevoyages.com/")
fetchData("https://onatdz.com/")
//fetchData("https://www.traveltodo.com/sejours-etrangers/packages/")

async function getOffre(html){
    const $ = cheerio.load(html)


    $(".tourmaster-tour-item-holder > .gdlr-core-item-list > .tourmaster-tour-grid ",html).each(function(){
        console.log($(this).find('.tourmaster-tour-thumbnail a').attr('href'))
        console.log($(this).find('.tourmaster-tour-thumbnail img').attr('src'))
        console.log($(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-title').text())
        console.log($(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-price-wrap >.tourmaster-tour-price >.tourmaster-tail  ').text()),
        console.log($(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-info-wrap > .tourmaster-tour-info:first ').text()) 
        const newOffre ={
            id : neweOffres.length + 1,
            url :$(this).find('.tourmaster-tour-thumbnail a').attr('href'),
            img :$(this).find('.tourmaster-tour-thumbnail img').attr('src'),
            prix :$(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-price-wrap > .tourmaster-tour-price > .tourmaster-tail ').text(),
            title :$(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-title').text(),
            agenceDeVoyage :`Asie-online` ,
            periode :$(this).find('.tourmaster-tour-content-wrap > .tourmaster-tour-info-wrap > .tourmaster-tour-info:first ').text(),
        }
        neweOffres.push(newOffre)
    })


    $(" .dlprogrammes-itemstyle ",html).each(function(){
        console.log($(this).find('.dlprogrammes-itemstyle a').attr('href'))
        console.log(`http://www.algerie-tours.com/default.aspx/${$(this).find('.dlprogrammes-itemstyle a').attr('href')}`)
        console.log($(this).find('.dlprogrammes-itemstyle img').attr('src'))
        console.log($(this).find(' .dlprogrammes-itemstyle aspan:first').text().trim())
        console.log($(this).find('.dlprogrammes-itemstyle   a span:last  ').text().trim())
        console.log($(this).find('.dlprogrammes-itemstyle  a span:nth-of-type(even)').text().trim) 
        const newOffre ={
            id : neweOffres.length + 1,
            url :`http://www.algerie-tours.com/default.aspx/${$(this).find('.dlprogrammes-itemstyle a').attr('href')}`,
            img :$(this).find('.dlprogrammes-itemstyle img').attr('src'),
            periode :$(this).find('.dlprogrammes-itemstyle  a span:last  ').text().trim(),
            title :$(this).find('.dlprogrammes-itemstyle a span:first').text().trim(),
            agenceDeVoyage :`algerie-tours` ,
            prix :$(this).find('.dlprogrammes-itemstyle  a  span:nth-of-type(even)').text().trim(),  
        }
        neweOffres.push(newOffre)
    })
 
    $(".media-container-row > .col-md-12 > .card",html).each(function(){
        console.log($(this).find('.card-body > .h5 > .text-dark').text())
        console.log($(this).find('.position-relative img').attr('src'))
        console.log($(this).find('.position-relative > .price ').text().trim())
        console.log(`https://www.dunevoyages.com${$(this).find('.position-relative a').attr('href')}`)
        console.log($(this).find('.card-body > .mb-1:first').text())
        console.log($(this).find('.card-body > .mb-1:last').text().trim())
        const newOffre ={
            id : neweOffres.length + 1,
            title : $(this).find('.card-body > .h5 > .text-dark').text(),
            img : $(this).find('.position-relative img').attr('src'),
            prix :$(this).find('.position-relative > .price ').text().trim(),
            url :`https://www.dunevoyages.com${$(this).find('.position-relative a').attr('href')}`,
            periode :$(this).find('.card-body > .mb-1:first').text(),
            agenceDeVoyage :`Dunevoyages`,
        }
        neweOffres.push(newOffre)
    })

    $(".elements-wrapper",html).each(function(){
        console.log($(this).find('.wcps-items-thumb a').attr('href'))
        console.log($(this).find('.wcps-items-thumb img').attr('src'))
        console.log($(this).find('.wcps-items-price bdi ').text())
        console.log($(this).find('.wcps-items-title').text())
        const newOffre ={
            id : neweOffres.length + 1,
            url :$(this).find('.wcps-items-thumb a').attr('href'),
            img :$(this).find('.wcps-items-thumb img').attr('src'),
            prix :$(this).find('.wcps-items-price bdi ').text(),
            title :$(this).find('.wcps-items-title').text(),
            periode :``,
            agenceDeVoyage :`ONAT l'instinct du voyage` ,
        }
        neweOffres.push(newOffre)
    }) 

    $(".offres > li",html).each(function(){  
        console.log($(this).find(' a').attr('href'));
        console.log($(this).find('.asdBlog-post > .asd-blog-image img').attr('src')); 
        console.log($(this).find('.asdBlog-intro p span').text().trim().split('de')[1]);
        console.log($(this).find('.asdBlog-post  h2').text().trim());
        console.log($(this).find('.asdBlog-intro p span ').text().trim().split('de')[0]);
        const newOffre ={
            id : neweOffres.length + 1,
            url :$(this).find(' a').attr('href'),
            img :$(this).find('.asdBlog-post > .asd-blog-image img').attr('src'),
            prix :$(this).find('.asdBlog-intro p span').text().trim().split('de')[1] || ``,
           
            title :$(this).find('.asdBlog-post  h2').text().trim(),
            agenceDeVoyage :`agence-voyage-organise-depart-oran-alger`,
            periode:$(this).find('.asdBlog-intro p span').text().trim().split('de')[0],
        }
        neweOffres.push(newOffre)
    }) 

    


    try {
    await fs.writeFile("data.json", JSON.stringify(neweOffres))
    console.log(neweOffres)
    } catch(error) {
        console.error(error)
    }
}