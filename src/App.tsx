import React, { useState } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

interface ValidationStats {
  validLines: number;
  errorLines: number;
  totalErrors: number;
  totalWarnings: number;
}

interface ValidationResult {
  success: boolean;
  fileName: string;
  report: string;
  stats: ValidationStats;
  errors: string[];
  warnings: string[];
}

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleValidate = async () => {
    if (!file) {
      setError('Por favor, selecione um arquivo CSV.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<ValidationResult>('https://validador-csv-iti-backend.onrender.com', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao validar o arquivo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadReport = () => {
    if (result?.report) {
      const blob = new Blob([result.report], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${result.fileName.replace('.csv', '')}_relatorio.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleNewFile = () => {
    setFile(null);
    setResult(null);
    setError(null);
    const input = document.getElementById('file-upload') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="card">
          <h2>📄 Sobre o Validador</h2>
          <p>
            Este validador verifica se arquivos CSV estão em conformidade com as regras do{' '}
            <strong>Item 4 do documento ADE-ICP-05.C</strong> do ITI.
          </p>
          <p>O arquivo deve conter 19 campos separados por ponto e vírgula (;) e estar codificado em UTF-8.</p>
        </div>

        <div className="card">
          <h2>📁 Selecione o Arquivo</h2>
          <div className="upload-section">
            <input
              type="file"
              id="file-upload"
              accept=".csv"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload" className="upload-button">
              Escolher Arquivo
            </label>
            {file && <span className="file-name">{file.name}</span>}
            <button onClick={handleValidate} disabled={isLoading || !file} className="validate-button">
              {isLoading ? 'Validando...' : 'Validar Arquivo'}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>

        {result && (
          <div className="card">
            <h2>✅ Resultado da Validação</h2>
            <p>Arquivo: <strong>{result.fileName}</strong></p>
            <div className="stats-grid">
              <div className="stat-box valid">
                <span>{result.stats.validLines}</span>
                <p>Linhas Válidas</p>
              </div>
              <div className="stat-box error">
                <span>{result.stats.errorLines}</span>
                <p>Linhas com Erro</p>
              </div>
              <div className="stat-box error">
                <span>{result.stats.totalErrors}</span>
                <p>Total de Erros</p>
              </div>
              <div className="stat-box warning">
                <span>{result.stats.totalWarnings}</span>
                <p>Total de Avisos</p>
              </div>
            </div>
            <div className="result-actions">
              <button onClick={handleDownloadReport} className="download-button">
                Baixar Relatório
              </button>
              <button onClick={handleNewFile} className="new-file-button">
                Novo Arquivo
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
