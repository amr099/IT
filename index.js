$(()=>{
    const keys = ["mission","company","customer"]

    for(let key of keys){
        $(`.${key}`).on('click',()=>{
            $(`.accord.${key}`).addClass('active')
            $(`#findout div:not(.accord.${key})`).removeClass('active')

            $(`#findout figure:not(.${key})`).addClass('hide')
            $(`.figure-${key}`).removeClass('hide')
            $(`.figure-${key}`).addClass('flex')
        })
    }

    $('.burger').on('click',()=>{
        $('nav.mobile').removeClass('hide')
    })

    $('.close').on('click',()=>{
        $('nav.mobile').addClass('hide')
    })
})