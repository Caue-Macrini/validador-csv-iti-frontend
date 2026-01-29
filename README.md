# 📋 Validador de CSV - ICP-Brasil

Sistema completo para validação de arquivos CSV conforme especificações do **Item 4 do documento ADE-ICP-05.C** do ITI, com interface moderna usando o padrão visual GOV.BR.

---

# 🌐 Validador de CSV - ICP-Brasil (Full-Stack)

## 🌟 Destaque para o Portfólio
Este projeto é uma aplicação **Full-Stack** que demonstra a capacidade de construir uma solução completa, desde a interface do usuário até a lógica de *backend* e validação de dados.
*   **Desenvolvimento Full-Stack**: Integração de **React** (Frontend) com **Flask/Python** (Backend).
*   **Lógica de Negócios Complexa**: Implementação da validação de arquivos CSV conforme a especificação **ADE-ICP-05.C** do ITI.
*   **Experiência do Usuário (UX)**: Uso do padrão visual **GOV.BR** para uma interface moderna e familiar.

## 🎯 Visão Geral
Aplicação web para upload e validação de arquivos CSV, garantindo a conformidade com as regras de negócio específicas do ITI (Instituto Nacional de Tecnologia da Informação). O usuário pode fazer o upload do arquivo e receber um relatório detalhado com linhas válidas, linhas com erro e um resumo dos problemas encontrados.

### Tecnologias Utilizadas
| Categoria | Tecnologia |
| :--- | :--- |
| **Backend** | Python 3, Flask, Flask-CORS |
| **Frontend** | React 18, TypeScript, Vite |
| **Design** | Padrão visual GOV.BR |
| **Validação** | Script Python customizado |

## 🚀 Como Rodar (Demo)
**Link para Demo (Se disponível)**: *Recomenda-se fortemente fazer o deploy do frontend e backend (ex: Vercel/Netlify + Render/Heroku) e colocar o link aqui.*

*(Inclua as instruções detalhadas de instalação e execução do seu README original abaixo desta seção.)*

## 🚀 Instalação Rápida

### Pré-requisitos

- **Python 3.8+** → [Baixar aqui](https://www.python.org/downloads/)
- **Node.js 18+** → [Baixar aqui](https://nodejs.org/)

---

## 📥 Passo 1: Preparar o Ambiente

### 1.1 Configurar Python

Abra o **PowerShell** ou **Prompt de Comando** na pasta do projeto e execute:

```bash
# Criar ambiente virtual
python -m venv .venv

# Ativar ambiente virtual (Windows)
.\.venv\Scripts\Activate

# Ativar ambiente virtual (Mac/Linux)
source .venv/bin/activate

# Instalar dependências
pip install -r requirements.txt
```

### 1.2 Configurar Node.js

No mesmo terminal (ou em outro), execute:

```bash
# Instalar dependências
npm install
```

---

## ▶️ Passo 2: Executar a Aplicação

Você precisa de **2 terminais abertos** ao mesmo tempo:

### Terminal 1: Backend (Python/Flask)

```bash
# Ativar ambiente virtual
.\.venv\Scripts\Activate

# Iniciar servidor
python app.py
```

Você verá:
```
 * Running on http://127.0.0.1:5000
```

**⚠️ NÃO FECHE ESTE TERMINAL!**

### Terminal 2: Frontend (React/Vite)

Abra um **NOVO terminal** e execute:

```bash
# Iniciar interface
npm run dev
```

Você verá:
```
  Local: http://localhost:5173/
```

---

## 🌐 Passo 3: Acessar o Sistema

Abra seu navegador em: **http://localhost:5173**

---

## 📖 Como Usar

1. Clique em **"Escolher Arquivo"** e selecione um CSV
2. Clique em **"Validar Arquivo"**
3. Veja os resultados:
   - 🟢 **Linhas Válidas**
   - 🔴 **Linhas com Erro**
   - 🔴 **Total de Erros**
   - 🟡 **Total de Avisos**
4. Clique em **"Baixar Relatório"** para obter o arquivo completo

---

## 🛠️ Solução de Problemas

### ❌ "python não é reconhecido"

**Causa**: Python não está no PATH do sistema.

**Solução**: Reinstale o Python e marque a opção **"Add Python to PATH"**.

### ❌ "npm não é reconhecido"

**Causa**: Node.js não está instalado.

**Solução**: Instale o Node.js do site oficial.

### ❌ "Porta 5000 já está em uso"

**Causa**: Outro programa está usando a porta 5000.

**Solução**: Edite `app.py` e mude a última linha para:
```python
app.run(debug=True, port=5001)
```

### ❌ Frontend não conecta com backend

**Verificações**:
1. O servidor Python está rodando? (Terminal 1)
2. Há erros no terminal do Python?
3. Tente acessar http://127.0.0.1:5000 diretamente

---

## 📁 Estrutura do Projeto

```
validador-csv-iti/
├── app.py                    # Servidor Backend (Flask)
├── validador_csv_iti.py      # Script de validação
├── requirements.txt          # Dependências Python
├── package.json              # Dependências Node.js
├── src/
│   ├── App.tsx               # Componente principal
│   ├── App.css               # Estilos da aplicação
│   ├── components/
│   │   ├── Header.tsx        # Cabeçalho GOV.BR
│   │   ├── Header.css
│   │   ├── Footer.tsx        # Rodapé
│   │   └── Footer.css
│   ├── main.tsx              # Ponto de entrada
│   └── index.css             # Estilos globais
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 Tecnologias Utilizadas

- **Backend**: Python 3, Flask, Flask-CORS
- **Frontend**: React 18, TypeScript, Vite
- **Design**: Padrão GOV.BR
- **Validação**: Script Python customizado (ADE-ICP-05.C)

---

## 📝 Notas Importantes

- O arquivo CSV deve estar em **UTF-8**
- Deve conter **19 campos** separados por **ponto e vírgula (;)**
- O relatório completo é gerado em formato texto

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique se os pré-requisitos estão instalados
2. Certifique-se de que os 2 terminais estão rodando
3. Leia as mensagens de erro com atenção
4. Consulte a seção "Solução de Problemas"

---

**Desenvolvido por Manus AI** 🤖
