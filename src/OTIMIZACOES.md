# Diretrizes de Otimização para o Projeto

## Lazy Loading de Componentes

Use o React.lazy e Suspense para carregar componentes sob demanda:

```jsx
import React, { Suspense, lazy } from 'react';

// Em vez de importar diretamente
// import PaginaPesada from './components/PaginaPesada';

// Use lazy loading
const PaginaPesada = lazy(() => import('./components/PaginaPesada'));

// Use em um componente com Suspense
function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PaginaPesada />
    </Suspense>
  );
}
```

## Otimização de Imagens

1. Use o formato WebP quando possível
2. Aplique o atributo `loading="lazy"` em imagens
3. Defina width e height para evitar layout shift

```jsx
<img 
  src="/imagens/otimizada.webp" 
  alt="Descrição" 
  loading="lazy" 
  width="800" 
  height="600" 
/>
```

## Otimização de Renderização

1. Use React.memo para componentes que não mudam com frequência:

```jsx
const ComponenteOtimizado = React.memo(function MeuComponente(props) {
  // seu componente aqui
});
```

2. Use useCallback para funções em props:

```jsx
const handleClick = useCallback(() => {
  // lógica do clique
}, [dependencias]);
```

3. Use useMemo para cálculos caros:

```jsx
const resultadoCalculado = useMemo(() => {
  return calcularAlgoComplexo(a, b);
}, [a, b]);
```

## Reduzir o Tamanho do Bundle

1. Importe apenas o necessário:
   ```jsx
   // RUIM
   import { Button, Card, Alert, ... } from 'biblioteca-ui';
   
   // BOM - importação específica
   import Button from 'biblioteca-ui/Button';
   import Card from 'biblioteca-ui/Card';
   ```

2. Use import dinâmico para código raramente usado:
   ```jsx
   const handleClick = async () => {
     const { processarDados } = await import('./utils/processarDados');
     const resultado = processarDados(dados);
   };
   ```

## CSS/Tailwind Otimizado

1. Remova classes não utilizadas em produção
2. Agrupe estilos similares em classes utilitárias

## Monitoramento de Performance

Use a extensão React DevTools no Chrome/Firefox para identificar renderizações desnecessárias e componentes lentos. 