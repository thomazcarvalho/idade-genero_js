function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var sexo = document.getElementsByName('radsex')
    var exibirImg = document.createElement('img') // criando elemento imagem
    exibirImg.setAttribute('id', 'imagem') // atribuindo um id='imagem' ao elemento criado

    if (fano.value.length == 0 || Number(fano.value) > ano || isNaN(fano.value)) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var idade = ano - Number(fano.value)

        var genero = ''
        if (sexo[0].checked) {
            genero = 'Masculino'
        } else {
            genero = 'Feminino'
        }
        res.innerHTML = `<p>Sua idade é: <strong>${idade} anos</strong>.</p>`
        res.innerHTML += `<p>Seu sexo é: <strong>${genero}</strong>.</p>`

        if (genero == 'Masculino') {
            // atribuindo uma source src='img.png' para o elemento criado
            if (idade < 3) {
                exibirImg.setAttribute('src', 'h1.png')
            } else if (idade < 11) {
                exibirImg.setAttribute('src', 'h2.png')
            } else if (idade < 21) {
                exibirImg.setAttribute('src', 'h3.png')
            } else if (idade < 60) {
                exibirImg.setAttribute('src', 'h4.png')
            } else if (idade < 120) {
                exibirImg.setAttribute('src', 'h5.png')
            } else {
                exibirImg.setAttribute('src', 'dead.png')
            }
        }

        if (genero == 'Feminino') {
            // atribuindo uma source src='img.png' para o elemento criado
            if (idade < 3) {
                exibirImg.setAttribute('src', 'm1.png')
            } else if (idade < 11) {
                exibirImg.setAttribute('src', 'm2.png')
            } else if (idade < 21) {
                exibirImg.setAttribute('src', 'm3.png')
            } else if (idade < 60) {
                exibirImg.setAttribute('src', 'm4.png')
            } else if (idade < 120) {
                exibirImg.setAttribute('src', 'm5.png')
            } else {
                exibirImg.setAttribute('src', 'dead.png')
            }
        }

        res.appendChild(exibirImg) // fazendo um append do elemento criado à div='res'
    }
}