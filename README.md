# 🇮🇹 Tutto Italian - A Essência de Tudo (La Documentazione Completa)
## Ultra Precisione in Ogni Dettale (Precisão Extrema em Cada Detalhe)

---

> "Indulge in a gastronomic journey where every dish is a culinary masterpiece, crafted with ultra precision."
>
> — *Tutto Italian*

Este documento serve como um guia abrangente para a **arquitetura, desenvolvimento, design system e implantação** do website oficial do restaurante *Tutto Italian*. O projeto foi concebido para refletir a elegância e a autenticidade da experiência *fine dining* em uma plataforma digital de alta performance.

| Detalhe | Valor |
| :--- | :--- |
| **Repositório GitHub** | [https://github.com/laisresende07/tuttoitalian](https://github.com/laisresende07/tuttoitalian) |
| **Design Source (Figma)** | [Figma Prototype](https://www.figma.com/proto/H3FAu06hFDZ7CTeYziwTzB/Untitled?page-id=0%3A1&node-id=3-2&viewport=21%2C-2137%2C0.47&t=N6su1kZhVT4KzVDL-1&scaling=scale-down&content-scaling=fixed) |
| **Status Atual** | Produção (Vercel) |

---

## I. Arquitetura e Tecnologia (La Struttura)

O website foi construído sobre uma **Modern Web Stack**, priorizando a performance, a experiência de desenvolvimento e o SEO.

### Tecnologias-Chave

| Camada | Tecnologia | Benefício Primário |
| :--- | :--- | :--- |
| **Framework** | **Next.js** (React) | Renderização Híbrida (SSR/SSG), roteamento automático e otimização de imagens nativa. |
| **Hospedagem** | **Vercel** | Edge Functions para CDN global e *Continuous Deployment* (CI/CD) instantâneo via Git. |
| **Estilização** | **CSS Modules / SCSS** | Escopo local de estilos, modularidade e controle total sobre o design *premium*. |
| **Linguagem** | **JavaScript/TypeScript** | Garante código moderno, tipagem robusta e manutenibilidade. |

---

## II. Design System & Estilo (L'Estetica)

O design traduz a filosofia **"Tutto" (Tudo)**: elegância minimalista, contraste intenso e foco total na qualidade visual do produto culinário.

### A. Paleta de Cores (I Colori)

A paleta é de **alto contraste**, utilizando o espaço negativo (whitespace) como um elemento de luxo.

---

## IV. Funcionalidades Chave (Le Funzionalità)

Cada funcionalidade foi cuidadosamente elaborada para aprimorar a experiência do usuário.

* **A Vitrine da Culinária (*Il Piatto Forte*):** Exibição clara das categorias e destaque para as **Popular Delights** e o **Prato Especial do Mês**.
* **Reserva Simplificada (*La Prenotazione*):** O botão principal de "BOOK A TABLE" direciona o usuário imediatamente para o WhatsApp, reduzindo atrito.
* **Informações Essenciais (*Il Contatto*):** Seção de `VISIT US` e `CONTACTS` na parte inferior, com endereço e números de telefone claros.

---

## V. Instalação e Deploy (L'Assemblaggio & La Messa in Tavola)

### A. Setup do Ambiente

| Pré-requisitos | Node.js (v16+), npm/yarn |
| :--- | :--- |
| **1. Clonar o Repositório** | `git clone https://github.com/laisresende07/tuttoitalian` |
| **2. Entrar no Diretório** | `cd tuttoitalian` |
| **3. Instalar as Dependências** | `yarn install` **ou** `npm install` |
| **4. Iniciar o Servidor Local** | `yarn dev` **ou** `npm run dev` (Acessível em `http://localhost:3000`) |

### B. Deploy Contínuo (CI/CD)

O *deploy* é otimizado via **Vercel**.

1.  O projeto está conectado ao repositório GitHub.
2.  Qualquer `push` para a *branch* `main` inicia uma *build* e *deploy* automáticos, mantendo o ambiente de produção sempre atualizado.

***
*Desenvolvido com a mesma paixão e precisão que a culinária do Tutto Italian.*
