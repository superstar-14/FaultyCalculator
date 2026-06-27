# Faulty Calculator

A CLI-based JavaScript calculator that performs arithmetic operations. However, it is designed with a twist: it has a **10% probability** of yielding incorrect results (faulty calculations), simulating intentional software failures.

## How It Works
- The application prompts for two numbers and an arithmetic operator (`+`, `-`, `*`, `/`).
- A random number generator determines whether the calculation will be correct (90% chance) or faulty (10% chance).
- **Faulty Mapping**:
  - `+` becomes `*`
  - `-` becomes `/`
  - `*` becomes `-`
  - `/` becomes `+`
- The user is then prompted if they want to run the calculator again.

---

## Installation & Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone or navigate to the directory:
   ```bash
   cd "Faulty Calculator"
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application
Launch the calculator from your terminal:
   ```bash
   node index.js
   ```
