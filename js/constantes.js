const TAREFAS = [
{
    titulo:'Revisar código crítico',
    descricao: 'Revisar bugs críticos no mudulo principal',
    prioridade: 'Alta',
    Data: '12/12/2012',
    responsavel: {'Luisa', 'Fabiano'},
}

{
    titulo:'Revisar código crítico',
    descricao: 'Revisar bugs críticos no mudulo principal',
    prioridade: 'Alta',
    Data: '12/12/2012',
    responsavel: {'Luisa', 'Fabiano'},
}

{
    titulo:'Revisar código crítico',
    descricao: 'Revisar bugs críticos no mudulo principal',
    prioridade: 'Alta',
    Data: '12/12/2012',
    responsavel: {'Luisa', 'Fabiano'},
}

{
    titulo:'Revisar código crítico',
    descricao: 'Revisar bugs críticos no mudulo principal',
    prioridade: 'Alta',
    Data: '12/12/2012',
    responsavel: {'Luisa', 'Fabiano'},
}

{
    titulo:'Revisar código crítico',
    descricao: 'Revisar bugs críticos no mudulo principal',
    prioridade: 'Alta',
    Data: '12/12/2012',
    responsavel: {'Luisa', 'Fabiano'},
}


function limparFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("prioridade").selectedIndex = 0;
    document.getElementById("data").value = "";
    document.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = false);
}

function adicionarTarefa() {
    alert("Tarefa adicionada com sucesso!");
}





