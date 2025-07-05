import React, { useState, useEffect } from 'react';

type DynamicSvgIconProps = {
  src: string; // O caminho para o arquivo SVG
  alt: string; // Texto alternativo para acessibilidade
  className?: string; // Classes opcionais
};

const DynamicSvgIcon: React.FC<DynamicSvgIconProps> = ({ src, alt, className }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setSvgContent(text);
        setError(false);
      } catch (e) {
        console.error(`Falha ao carregar SVG de ${src}:`, e);
        setError(true);
        setSvgContent(null);
      }
    };

    fetchSvg();
  }, [src]);

  if (error) {
    // Retorna um fallback ou uma mensagem de erro
    return <span className={className} title={`Erro ao carregar o ícone: ${alt}`}>{alt}</span>;
  }

  if (svgContent === null) {
    // Opcional: um placeholder enquanto o SVG está sendo carregado
    // As classes 'w-4 h-4' (ou qualquer tamanho desejado) e 'inline-block' substituem o estilo inline.
    return <div className={`${className} w-4 h-4 inline-block`} aria-label={`Carregando ${alt}...`} />;
  }

  // Injeta o SVG diretamente no DOM
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={alt}
    />
  );
};

export default DynamicSvgIcon;