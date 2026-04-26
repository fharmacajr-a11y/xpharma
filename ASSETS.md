# XPharma — Brand Assets Pendentes

Todos os arquivos devem ser salvos em `assets/images/`.  
**Não usar imagens sem licença comercial livre ou autorização da empresa.**  
Formatos aceitos: `.jpg` (fotografia), `.png` (transparência), `.webp` (otimizado).

---

## Prioridade Alta

Imagens visíveis nas páginas de maior tráfego (home, sobre, autenticidade).

| Arquivo esperado | Página(s) | Proporção | Resolução mín. | Tipo | `alt` sugerido | Observação |
|---|---|---|---|---|---|---|
| `laboratorio.jpg` | index.html — seção hero | 4:5 | 800 × 1000 px | Foto real — laboratório de produção | Laboratório de produção XPharma: equipamentos farmacêuticos, ambiente estéril e bancada de análise | Foto principal da home; impacto visual alto |
| `equipe.jpg` | sobre.html — seção Quem Somos | 4:5 | 800 × 1000 px | Foto real — equipe em laboratório | Equipe XPharma em laboratório de pesquisa e desenvolvimento | Aparece no topo da página Sobre |
| `embalagem-codigo.jpg` | autenticidade.html — seção Localização do Código | 3:4 | 600 × 800 px | Foto real — embalagem com código de autenticação em destaque | Embalagem XPharma com código de autenticação em destaque | Usada em contexto de segurança/antifraude |

---

## Prioridade Média

Imagens de destaque na home e no catálogo de produtos.

| Arquivo esperado | Página(s) | Proporção | Resolução mín. | Tipo | `alt` sugerido | Observação |
|---|---|---|---|---|---|---|
| `produto-performance.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Performance Pro | Embalagem XPharma Linha Performance Pro | Hero de produto na home e card no catálogo |
| `produto-pharma.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Pharma Grade | Embalagem XPharma Linha Pharma Grade | Hero de produto na home e card no catálogo |
| `produto-wellness.jpg` | index.html + produtos.html | 1:1 | 600 × 600 px | Foto de embalagem — Linha Wellness & Vital | Embalagem XPharma Linha Wellness & Vital | Hero de produto na home e card no catálogo |
| `fabrica.jpg` | sobre.html — seção Tecnologia | 16:9 | 1200 × 675 px | Foto real — linha de produção ou fábrica GMP | Linha de produção XPharma: ambiente GMP, maquinário farmacêutico e controle de qualidade | Imagem wide de instalações |

---

## Prioridade Baixa

Cards individuais do catálogo de produtos (`produtos.html`). Cada arquivo corresponde a um produto específico.

| Arquivo esperado | Produto | Proporção | Resolução mín. | Tipo | `alt` sugerido |
|---|---|---|---|---|---|
| `xp-pro-whey.jpg` | XP Pro Whey | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Pro Whey — proteína de alto desempenho |
| `xp-creatine.jpg` | XP Creatine Monohydrate | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Creatine Monohydrate — monohidrato farmacêutico |
| `xp-bcaa.jpg` | XP BCAA Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP BCAA Pro |
| `xp-testosterone.jpg` | XP Testosterone Complex | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Testosterone Complex |
| `xp-gh-factor.jpg` | XP GH Factor | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP GH Factor |
| `xp-peptide.jpg` | XP Peptide Collagen | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Peptide Collagen |
| `xp-omega3.jpg` | XP Omega-3 Ultra | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Omega-3 Ultra |
| `xp-multivitamin.jpg` | XP Multivitamin Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Multivitamin Pro |
| `xp-vitd3.jpg` | XP Vitamin D3 + K2 | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Vitamin D3 + K2 |
| `xp-recovery.jpg` | XP Recovery Night | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Recovery Night |
| `xp-glutamine.jpg` | XP Glutamine Pro | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Glutamine Pro |
| `xp-antioxidant.jpg` | XP Anti-Oxidant Complex | 1:1 | 600 × 600 px | Foto de embalagem | Embalagem XP Anti-Oxidant Complex |

---

## Orientações de Qualidade e Licença

- **Fotos reais da empresa** são preferíveis a banco de imagens para contextos de laboratório, equipe e fábrica.
- Se usar banco de imagens, exigir licença **comercial livre** (ex: Unsplash, Pexels com atribuição verificada, Adobe Stock, Getty licenciado).
- **Não usar** imagens geradas por IA sem licença clara e compatível com uso comercial.
- Otimizar todos os arquivos antes do upload:
  - Usar [Squoosh](https://squoosh.app/) ou `sharp` (Node.js) para compressão.
  - Manter `.jpg` abaixo de 200 KB por arquivo de produto e abaixo de 400 KB para imagens hero.
  - Considerar gerar versão `.webp` adicional para browsers modernos.
- Nomear os arquivos exatamente como listado acima — os HTMLs já referenciam esses caminhos.

---

## Após adicionar as imagens

Substitua cada bloco `<div class="img-placeholder ...">` pelo `<img>` correspondente:

```html
<!-- Antes -->
<div class="img-placeholder" role="img" aria-label="...">
  <span class="ph-icon" aria-hidden="true">🧪</span>
  <span>assets/images/laboratorio.jpg</span>
</div>

<!-- Depois -->
<img src="assets/images/laboratorio.jpg"
     alt="Laboratório de produção XPharma: equipamentos farmacêuticos, ambiente estéril e bancada de análise"
     width="800" height="1000"
     loading="lazy"
     decoding="async">
```

Total de imagens pendentes: **19**  
(3 alta prioridade · 4 média prioridade · 12 baixa prioridade)
