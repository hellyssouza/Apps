$(document).ready(function(){
    $("#exit").click(function(){
        navigator.app.exitApp();    
    });
    
    $("#but").click(function(){
        if($("#CNPJ").val().length == 0){
            alert("CNPJ não informado");
            return
        }
        
        $('#modal').css("display","block");
        
        $('#sair').click(function(){
            $('#modal').css("display","none");
        }); 
        
        window.onclick = function(event){
            if(event.target == $('#modal'))
                $('#modal').css("display","none");
        }
        
        $.ajax({
            url: 'https://www.receitaws.com.br/v1/cnpj/' + $("#CNPJ").val(),
            async: true,
            dataType: 'json',
            crossDomain: true,
            method: 'GET',
            success: function(data){
                    $('#CNPJ').val("");
                    $('.nome').html("Nome:"+data.nome);
                    $('.nomeFantasia').html("Nome fantasia:"+data.fantasia);
                    $('.telefone').html("Telefone:"+data.telefone);
                    $('.email').html("Email:"+data.email);
                    $('.dataAbertura').html("Abertura:"+data.abertura); $('.naturezaJuridica').html("Natureza:"+data.natureza_juridica);
                    $('.situacao').html("Situacao:"+data.situacao);
            },
            error: function(error){
                    alert("Erro ao fazer a requisicao");
            }
        });
    });
});
