    const apiUrl = '/cidades';

    function displayMessage(mensagem) {
        let msg = document.getElementById('msg');
        msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
    }

    function readCidade(processaDados) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cidades = data;
                processaDados(data);
            })
            .catch(error => {
                console.error('Erro ao ler cidades via API JSONServer:', error);
                displayMessage("Erro ao ler cidades");
            });
    }

    function createCidade(cidade, refreshFunction) {
        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cidade),
            })
            .then(response => response.json())
            .then(data => {
                displayMessage("Cidade inserida com sucesso");
                if (refreshFunction) refreshFunction();
            })
            .catch(error => {
                console.error('Erro ao inserir cidade via API JSONServer:', error);
                displayMessage("Erro ao inserir cidade");
            });
    }

    function updateCidade(id, cidade, refreshFunction) {
        fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cidade),
            })
            .then(response => response.json())
            .then(data => {
                displayMessage("Cidade alterada com sucesso");
                if (refreshFunction) refreshFunction();
            })
            .catch(error => {
                console.error('Erro ao atualizar cidade via API JSONServer:', error);
                displayMessage("Erro ao atualizar cidade");
            });
    }

    function deleteCidade(id, refreshFunction) {
        fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                displayMessage("Cidade removida com sucesso");
                if (refreshFunction) refreshFunction();
            })
            .catch(error => {
                console.error('Erro ao remover cidade via API JSONServer:', error);
                displayMessage('Erro ao remover cidade');
            });
    }