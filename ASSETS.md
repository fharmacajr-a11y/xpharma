# XPharma — Organização de Assets

Todos os arquivos devem ser salvos em `assets/images/`, usando as subpastas abaixo.
**Não usar imagens sem licença comercial livre ou autorização da empresa.**
Formatos aceitos: `.jpg` (fotografia), `.png` (transparência), `.webp` (otimizado).

---

## Estrutura Atual de Pastas

- `assets/images/brand/` → logos oficiais, símbolo da marca, favicon futuro
- `assets/images/institutional/` → laboratório, equipe, fábrica, instalações
- `assets/images/products/` → catálogo, embalagens e cards de produto
- `assets/images/authenticity/` → embalagem com código, verificação e materiais antifraude

---

## Assets de Marca Já Adicionados

| Arquivo | Uso atual | Observação |
|---|---|---|
| `brand/logo-xpharma-premium-horizontal.jpg` | Header e footer | Logo principal aplicada no site |
| `brand/logo-xpharma-premium-com-simbolo.jpg` | Reserva para usos futuros | Não aplicada nesta rodada |

---

## Pendências — Prioridade Alta

Imagens visíveis nas páginas de maior tráfego. Nesta etapa, os placeholders continuam no HTML; apenas a organização dos caminhos foi definida aqui.

| Arquivo esperado | Página(s) | Proporção | Resolução mín. | Tipo | `alt` sugerido | Observação |
|---|---|---|---|---|---|---|
| `institutional/laboratorio.jpg` | index.html — seção hero | 4:5 | 800 × 1000 px | Foto real — laboratório de produção | Laboratório de produção XPharma: equipamentos farmacêuticos, ambiente estéril e bancada de análise | Foto principal da home; impacto visual alto |
| `institutional/equipe.jpg` | sobre.html — seção Quem Somos | 4:5 | 800 × 1000 px | Foto real — equipe em laboratório | Equipe XPharma em laboratório de pesquisa e desenvolvimento | Aparece no topo da página Sobre |
| `authenticity/embalagem-codigo.jpg` | autenticidade.html — seção Localização do Código | 3:4 | 600 × 800 px | Foto real — embalagem com código de autenticação em destaque | Embalagem XPharma com código de autenticação em destaque | Usada em contexto de segurança e antifraude |

---

## Pendências — Prioridade Média

Imagens de destaque na home e no catálogo de produtos.

| Arquivo esperado | Página(s) | Proporção | Resolução mín. | Tipo | `alt` sugerido | Observação |
|---|---|---|---|---|---|---|
| `products/produto-performance.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Performance Pro | Embalagem XPharma Linha Performance Pro | Hero de produto na home e card no catálogo |
| `products/produto-pharma.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Pharma Grade | Embalagem XPharma Linha Pharma Grade | Hero de produto na home e card no catálogo |
| `products/produto-wellness.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Wellness & Vital | Embalagem XPharma Linha Wellness & Vital | Hero de produto na home e card no catálogo |
| `institutional/fabrica.jpg` | sobre.html — seção Tecnologia | 16:9 | 1200 × 675 px | Foto real — linha de produção ou fábrica GMP | Linha de produção XPharma: ambiente GMP, maquinário farmacêutico e controle de qualidade | Imagem wide de instalações |

---

## Pendências — Prioridade Baixa

Cards individuais do catálogo de produtos em `produtos.html`. Cada arquivo corresponde a um produto específico.

| Arquivo esperado | Produto | Proporção | Resolução mín. | Tipo | `alt` sugerido |
|---|---|---|---|---|---|
| `products/xp-pro-whey.jpg` | XP Pro Whey | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Pro Whey — proteína de alto desempenho |
| `products/xp-creatine.jpg` | XP Creatine Monohydrate | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Creatine Monohydrate — monohidrato farmacêutico |
| `products/xp-bcaa.jpg` | XP BCAA Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP BCAA Pro |
| `products/xp-testosterone.jpg` | XP Testosterone Complex | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Testosterone Complex |
| `products/xp-gh-factor.jpg` | XP GH Factor | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP GH Factor |
| `products/xp-peptide.jpg` | XP Peptide Collagen | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Peptide Collagen |
| `products/xp-omega3.jpg` | XP Omega-3 Ultra | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Omega-3 Ultra |
| `products/xp-multivitamin.jpg` | XP Multivitamin Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Multivitamin Pro |
| `products/xp-vitd3.jpg` | XP Vitamin D3 + K2 | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Vitamin D3 + K2 |
| `products/xp-recovery.jpg` | XP Recovery Night | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Recovery Night |
| `products/xp-glutamine.jpg` | XP Glutamine Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Glutamine Pro |
| `products/xp-antioxidant.jpg` | XP Anti-Oxidant Complex | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Anti-Oxidant Complex |

---

## Orientações de Qualidade e Licença

- Fotos reais da empresa são preferíveis a banco de imagens para contextos de laboratório, equipe e fábrica.
- Se usar banco de imagens, exigir licença comercial livre ou autorização equivalente.
- Não usar imagens geradas por IA sem licença clara e compatível com uso comercial.
- Otimizar todos os arquivos antes do upload:
  - Usar Squoosh ou sharp para compressão.
  - Manter `.jpg` abaixo de 200 KB por arquivo de produto e abaixo de 400 KB para imagens hero.
  - Considerar gerar versão `.webp` adicional para browsers modernos.
- Os caminhos futuros devem seguir exatamente as subpastas documentadas acima.

---

## Quando For Trocar os Placeholders

Os placeholders atuais não foram alterados nesta rodada. Quando a substituição visual for feita, usar os caminhos já organizados nas subpastas.

```html
<!-- Exemplo futuro -->
<img src="assets/images/institutional/laboratorio.jpg"
     alt="Laboratório de produção XPharma: equipamentos farmacêuticos, ambiente estéril e bancada de análise"
     width="800" height="1000"
     loading="lazy"
     decoding="async">
```

Total de imagens pendentes: **19**
(3 alta prioridade · 4 média prioridade · 12 baixa prioridade)
