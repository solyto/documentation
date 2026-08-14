---
title: Finanzas
description: Controla tu presupuesto y tu patrimonio neto a lo largo del tiempo.
---

Finanzas te ayuda a controlar tu presupuesto del día a día y tu patrimonio neto general a lo largo del tiempo. Se divide en dos subsecciones: **Presupuesto** para hacer seguimiento de ingresos y gastos, y **Patrimonio** para hacer seguimiento de activos, pasivos y tu patrimonio neto total a lo largo del tiempo.

Ambas subsecciones son accesibles desde el centro de Finanzas, y cada una tiene su propia ruta dedicada. No se necesitan integraciones externas ni conexiones bancarias — todos los datos los introduces tú manualmente, manteniendo todo privado.

## Resumen

El resumen de Finanzas muestra dos tarjetas pulsables — **Presupuesto** y **Patrimonio** — con sus totales, además de tres gráficos:

- **Ingresos frente a gastos** — un gráfico de barras que compara ambos
- **Distribución del patrimonio** — una dona con los valores actuales de tus campos de patrimonio
- **Tendencia del patrimonio** — un gráfico de líneas de 12 meses de tu patrimonio neto total

## Presupuesto

Controla tus ingresos y gastos con entradas individuales.

### Entradas

Cada entrada de presupuesto tiene:

- **Título** — una descripción del ingreso o gasto
- **Tipo** — ingreso o gasto
- **Valor** — el importe

Añade entradas a medida que ganas o gastas. Edita o elimina entradas en cualquier momento.

### Ver totales

La vista de Presupuesto resume tus entradas:

- Una barra de progreso proporcional entre gastos e ingresos
- Una tarjeta de **Total** con el saldo acumulado (`+` para superávit, `-` para déficit)
- Secciones separadas de **Ingresos** y **Gastos** con sus subtotales

## Patrimonio

Controla tu patrimonio neto registrando el valor de tus activos y pasivos a lo largo del tiempo. Patrimonio es independiente de Presupuesto — se centra en tu situación financiera general en lugar de en el flujo de caja del día a día.

### Campos de patrimonio

Crea campos con nombre para cada componente de tu patrimonio neto:

- **Activos** — cuentas bancarias, inversiones, inmuebles, ahorros, fondos de jubilación, etc.
- **Pasivos** — deudas, préstamos, hipotecas, saldos de tarjetas de crédito, etc.

Cada campo es simplemente un título — añade o elimina campos en cualquier momento a medida que cambie tu situación financiera. Los campos se muestran en verde cuando son positivos y en rojo cuando son negativos.

### Registrar valores

Cada campo de patrimonio mantiene un **historial de valores**. Edita el valor actual en línea y solyto registra un nuevo valor con marca de tiempo. Con el tiempo, esto construye un historial de cómo ha cambiado cada campo. No necesitas registrar cada día — basta con actualizar los valores periódicamente cuando cambien tus saldos.

### Gráfico histórico

La página de Patrimonio muestra una dona con los valores actuales y una tarjeta de **Total**. Activa **Mostrar historial** para ver:

- Un gráfico de líneas de 12 meses del **patrimonio neto total**
- Un **gráfico de área apilada** con el valor de cada campo durante el mismo periodo

Esto te da una imagen clara de tu trayectoria financiera y te ayuda a ver si tu patrimonio neto está creciendo, disminuyendo o manteniéndose estable.

## Rutas

| Ruta | Descripción |
|-------|-------------|
| `/finances` | Centro de Finanzas con resumen y navegación |
| `/finances/wealth` | Seguimiento del patrimonio con campos, registro de valores y gráfico |
| `/finances/budget` | Gestión del presupuesto con entradas de ingresos y gastos |

## Exportar

Los datos de Presupuesto y Patrimonio se exportan como archivos `.csv`, compatibles con cualquier hoja de cálculo como Excel, Google Sheets o LibreOffice Calc. Consulta [Exportar datos](/integrations/exporting/).
