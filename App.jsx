import { useState, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// LESSON DATA
// ─────────────────────────────────────────────────────────────────────────────
const LESSONS = [
  // ── LESSON 1 ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Greetings & Introductions",
    subtitle: "Saludos e Introducciones",
    category: "retail",
    emoji: "👋",
    color: "#2563eb",
    theory: {
      title: "El Verbo TO BE – Ser / Estar",
      sections: [
        {
          heading: "¿Qué es el presente simple?",
          content: "El presente simple describe situaciones actuales, hechos y rutinas. El verbo más básico en inglés es **TO BE** (ser/estar).",
          table: {
            headers: ["Pronombre", "Español", "Verbo", "Ejemplo"],
            rows: [
              ["I", "Yo", "am", "I am the manager."],
              ["You", "Tú / Usted", "are", "You are a customer."],
              ["He / She / It", "Él / Ella", "is", "She is the cashier."],
              ["We", "Nosotros", "are", "We are the team."],
              ["They", "Ellos", "are", "They are employees."],
            ]
          }
        },
        {
          heading: "Vocabulario – Retail & Gerencia",
          content: "Las palabras más importantes que escucharás y usarás en tu trabajo:",
          vocab: [
            { en: "Manager", es: "Gerente", example: "I am the store manager." },
            { en: "Customer", es: "Cliente", example: "The customer is happy." },
            { en: "Cashier", es: "Cajero/a", example: "She is the cashier." },
            { en: "Employee", es: "Empleado/a", example: "He is a new employee." },
            { en: "Store", es: "Tienda", example: "The store is open." },
            { en: "Team", es: "Equipo", example: "We are a great team." },
            { en: "Shift", es: "Turno", example: "My shift starts at 8 AM." },
            { en: "Department", es: "Departamento", example: "The electronics department is busy." },
          ]
        },
        {
          heading: "Frases para el Trabajo (y la Vida)",
          phrases: [
            { en: "Good morning! How are you?", es: "¡Buenos días! ¿Cómo estás?" },
            { en: "Good afternoon! Nice to meet you.", es: "¡Buenas tardes! Mucho gusto." },
            { en: "Welcome to our store!", es: "¡Bienvenido a nuestra tienda!" },
            { en: "I am the manager on duty.", es: "Soy el gerente de turno." },
            { en: "We are open until 9 PM.", es: "Estamos abiertos hasta las 9 PM." },
            { en: "How can I help you today?", es: "¿En qué puedo ayudarle hoy?" },
            { en: "Have a great day!", es: "¡Que tenga un buen día!" },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "Soy el gerente.", answer: "I am the manager.", hint: "I am..." },
      { type: "translate", es: "Ella es la cajera.", answer: "She is the cashier.", hint: "She is..." },
      { type: "translate", es: "Nosotros somos un gran equipo.", answer: "We are a great team.", hint: "We are..." },
      { type: "translate", es: "Ellos son empleados nuevos.", answer: "They are new employees.", hint: "They are..." },
      { type: "fill", sentence: "___ am the manager on duty.", answer: "I", hint: "Pronombre para 'yo'" },
      { type: "fill", sentence: "The store ___ open.", answer: "is", hint: "Verbo 'to be' para 'it/the store'" },
      { type: "fill", sentence: "We ___ a great team.", answer: "are", hint: "Verbo 'to be' para 'we'" },
    ],
    writtenTest: [
      { q: "¿Cómo se dice 'Gerente' en inglés?", options: ["Manager", "Customer", "Cashier", "Employee"], correct: 0 },
      { q: "Completa: 'She ___ the cashier.'", options: ["am", "are", "is", "be"], correct: 2 },
      { q: "¿Cuál es la traducción de 'We are a great team'?", options: ["Ellos son un gran equipo", "Nosotros somos un gran equipo", "Yo soy un gran equipo", "Ustedes son un gran equipo"], correct: 1 },
      { q: "¿Cómo saludas a alguien por la mañana?", options: ["Good night!", "Good morning! How are you?", "Goodbye!", "See you later!"], correct: 1 },
      { q: "¿Qué significa 'Employee'?", options: ["Cliente", "Gerente", "Empleado", "Tienda"] , correct: 2 },
      { q: "¿Cuál frase usas para despedirte amablemente?", options: ["Welcome!", "How are you?", "Have a great day!", "I am the manager."], correct: 2 },
    ],
    voiceTest: [
      { prompt: "Di en inglés: 'Buenos días, ¿en qué puedo ayudarle?'", expected: "Good morning, how can I help you?", keywords: ["good morning", "help"] },
      { prompt: "Preséntate como el gerente de turno", expected: "I am the manager on duty.", keywords: ["am", "manager"] },
      { prompt: "Di: '¡Bienvenido a nuestra tienda!'", expected: "Welcome to our store!", keywords: ["welcome", "store"] },
      { prompt: "Despídete amablemente de un cliente", expected: "Have a great day!", keywords: ["great", "day"] },
    ]
  },

  // ── LESSON 2 ──────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Products, Prices & Shopping",
    subtitle: "Productos, Precios y Compras",
    category: "retail",
    emoji: "🛒",
    color: "#16a34a",
    theory: {
      title: "Verbos de Acción en Presente Simple",
      sections: [
        {
          heading: "Verbos de Acción – Regla del -S",
          content: "Para hablar de lo que hacemos, usamos verbos de acción. ⚠️ Cuando el sujeto es **he, she, it**, el verbo lleva **-s** al final.",
          table: {
            headers: ["Sujeto", "Verbo", "Ejemplo"],
            rows: [
              ["I / You / We / They", "sell", "We sell electronics."],
              ["He / She / It", "sell**s**", "She sells clothing."],
              ["I / You / We / They", "have", "We have a sale today."],
              ["He / She / It", "ha**s**", "The store has good prices."],
              ["I / You / We / They", "need", "I need a receipt."],
              ["He / She / It", "need**s**", "He needs the receipt."],
            ]
          }
        },
        {
          heading: "Vocabulario – Productos y Precios",
          content: "Palabras esenciales para hablar sobre productos y ventas:",
          vocab: [
            { en: "Price", es: "Precio", example: "The price is $10." },
            { en: "Discount", es: "Descuento", example: "We have a 20% discount." },
            { en: "Sale", es: "Oferta / Liquidación", example: "Everything is on sale!" },
            { en: "Receipt", es: "Recibo / Ticket", example: "Here is your receipt." },
            { en: "Inventory", es: "Inventario", example: "We check the inventory daily." },
            { en: "Stock", es: "Existencia", example: "This item is out of stock." },
            { en: "Return", es: "Devolución", example: "I need to return this item." },
            { en: "Exchange", es: "Cambio", example: "Can I exchange this?" },
            { en: "Aisle", es: "Pasillo", example: "Bread is in aisle 5." },
            { en: "Checkout", es: "Caja / Pago", example: "Please go to checkout." },
          ]
        },
        {
          heading: "Conversaciones de Compras",
          phrases: [
            { en: "How much does this cost?", es: "¿Cuánto cuesta esto?" },
            { en: "Do you have this in a different size?", es: "¿Tiene esto en otra talla?" },
            { en: "This item is on sale — 30% off.", es: "Este artículo está en oferta — 30% de descuento." },
            { en: "We have it in stock.", es: "Lo tenemos disponible." },
            { en: "Sorry, this is out of stock.", es: "Lo siento, no tenemos existencia." },
            { en: "The total is $25.50.", es: "El total es $25.50." },
            { en: "Do you need a bag?", es: "¿Necesita una bolsa?" },
            { en: "Would you like to return or exchange?", es: "¿Desea hacer una devolución o un cambio?" },
            { en: "Your change is $4.50.", es: "Su cambio es $4.50." },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "Nosotros vendemos electrónicos.", answer: "We sell electronics.", hint: "We sell..." },
      { type: "translate", es: "El precio es veinte dólares.", answer: "The price is $20.", hint: "The price is..." },
      { type: "translate", es: "Ella tiene el recibo.", answer: "She has the receipt.", hint: "She has..." },
      { type: "translate", es: "Lo siento, no tenemos existencia.", answer: "Sorry, this is out of stock.", hint: "Sorry, this is out of..." },
      { type: "translate", es: "¿Necesita una bolsa?", answer: "Do you need a bag?", hint: "Do you need..." },
      { type: "fill", sentence: "We ___ a 20% discount today.", answer: "have", hint: "Verbo 'tener' para 'we'" },
      { type: "fill", sentence: "The store ___ good prices.", answer: "has", hint: "Verbo 'tener' para 'the store'" },
    ],
    writtenTest: [
      { q: "¿Cómo se dice 'Descuento' en inglés?", options: ["Receipt", "Stock", "Discount", "Sale"], correct: 2 },
      { q: "Completa: 'She ___ clothing.'", options: ["sell", "sells", "have", "has"], correct: 1 },
      { q: "¿Qué significa 'This item is out of stock'?", options: ["Está en oferta", "No está en existencia", "Tiene descuento", "Es nuevo"], correct: 1 },
      { q: "¿Cómo preguntas cuánto cuesta algo?", options: ["What is this?", "How much does this cost?", "Do you have this?", "Where is this?"], correct: 1 },
      { q: "¿Qué significa 'Receipt'?", options: ["Precio", "Descuento", "Recibo", "Oferta"], correct: 2 },
      { q: "¿Cómo dices 'El pasillo 5'?", options: ["Hallway 5", "Lane 5", "Aisle 5", "Row 5"], correct: 2 },
    ],
    voiceTest: [
      { prompt: "Di: 'Este artículo está en oferta, 30% de descuento'", expected: "This item is on sale 30% off", keywords: ["item", "sale", "30"] },
      { prompt: "Dile al cliente el total: $25.50", expected: "The total is $25.50", keywords: ["total", "25"] },
      { prompt: "Di: 'Lo siento, no tenemos existencia'", expected: "Sorry, this is out of stock", keywords: ["sorry", "stock"] },
      { prompt: "Pregunta si el cliente necesita bolsa", expected: "Do you need a bag?", keywords: ["need", "bag"] },
    ]
  },

  // ── LESSON 3 ──────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Daily Operations & Leadership",
    subtitle: "Operaciones Diarias y Liderazgo",
    category: "retail",
    emoji: "📋",
    color: "#9333ea",
    theory: {
      title: "Instrucciones, Preguntas y Rutinas",
      sections: [
        {
          heading: "Dar Instrucciones – Imperativo",
          content: "Para dar instrucciones al equipo, usamos el verbo directo sin pronombre. Para ser más cortés, agrega **'Please'** al inicio.",
          table: {
            headers: ["Instrucción", "Con Please (cortés)", "Español"],
            rows: [
              ["Open the register.", "Please open the register.", "Abre la caja."],
              ["Check the inventory.", "Please check the inventory.", "Revisa el inventario."],
              ["Help the customer.", "Please help the customer.", "Ayuda al cliente."],
              ["Clean the aisle.", "Please clean the aisle.", "Limpia el pasillo."],
              ["Close the store.", "Please close the store.", "Cierra la tienda."],
            ]
          }
        },
        {
          heading: "Vocabulario – Gerencia y Operaciones",
          content: "Palabras clave para manejar tu equipo y las operaciones diarias:",
          vocab: [
            { en: "Schedule", es: "Horario", example: "The schedule is ready." },
            { en: "Report", es: "Reporte", example: "I need the daily report." },
            { en: "Meeting", es: "Reunión", example: "We have a team meeting at 8." },
            { en: "Training", es: "Entrenamiento", example: "New employee training is today." },
            { en: "Goal", es: "Meta", example: "Our sales goal is $5,000." },
            { en: "Break", es: "Descanso", example: "Your break is at 2 PM." },
            { en: "Overtime", es: "Horas extra", example: "We need overtime today." },
            { en: "Performance", es: "Desempeño", example: "Your performance is excellent." },
          ]
        },
        {
          heading: "Frases de Liderazgo",
          phrases: [
            { en: "What is your schedule today?", es: "¿Cuál es tu horario hoy?" },
            { en: "Please check the inventory.", es: "Por favor revisa el inventario." },
            { en: "We need to meet our sales goal.", es: "Necesitamos cumplir nuestra meta de ventas." },
            { en: "The meeting starts at 8 AM sharp.", es: "La reunión empieza a las 8 AM en punto." },
            { en: "Great job today, team!", es: "¡Gran trabajo hoy, equipo!" },
            { en: "Your break is in 15 minutes.", es: "Tu descanso es en 15 minutos." },
            { en: "I need the report before you leave.", es: "Necesito el reporte antes de que te vayas." },
            { en: "Can you work overtime today?", es: "¿Puedes trabajar horas extra hoy?" },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "Mi turno empieza a las 8 AM.", answer: "My shift starts at 8 AM.", hint: "My shift starts..." },
      { type: "translate", es: "Necesitamos cumplir nuestra meta.", answer: "We need to meet our goal.", hint: "We need to..." },
      { type: "translate", es: "Por favor revisa el inventario.", answer: "Please check the inventory.", hint: "Please check..." },
      { type: "translate", es: "Tu descanso es en 15 minutos.", answer: "Your break is in 15 minutes.", hint: "Your break is..." },
      { type: "translate", es: "¡Gran trabajo hoy, equipo!", answer: "Great job today, team!", hint: "Great job..." },
      { type: "fill", sentence: "The schedule ___ ready.", answer: "is", hint: "Verbo to be para 'it'" },
      { type: "fill", sentence: "We ___ a team meeting today.", answer: "have", hint: "Verbo 'tener' para 'we'" },
    ],
    writtenTest: [
      { q: "¿Cómo se dice 'Turno' en inglés?", options: ["Schedule", "Shift", "Meeting", "Report"], correct: 1 },
      { q: "¿Cuál instrucción es más cortés?", options: ["Check the inventory!", "You check inventory!", "Please check the inventory.", "Inventory check!"], correct: 2 },
      { q: "¿Qué significa 'We need to meet our sales goal'?", options: ["Necesitamos conocer al equipo", "Necesitamos cumplir nuestra meta de ventas", "Necesitamos una reunión", "Necesitamos más empleados"], correct: 1 },
      { q: "¿Cómo felicitas a tu equipo?", options: ["Good morning, team!", "Please help me!", "Great job today, team!", "Where is the report?"], correct: 2 },
      { q: "¿Qué significa 'Overtime'?", options: ["Horario", "Reporte", "Horas extra", "Descanso"], correct: 2 },
      { q: "¿Cómo dices 'Tu descanso es a las 2 PM'?", options: ["Your break is at 2 PM.", "Your lunch is 2 PM.", "Break time 2.", "You rest at 2 PM."], correct: 0 },
    ],
    voiceTest: [
      { prompt: "Felicita a tu equipo por su trabajo", expected: "Great job today team!", keywords: ["great", "job"] },
      { prompt: "Di: 'La reunión empieza a las 8 AM'", expected: "The meeting starts at 8 AM", keywords: ["meeting", "starts", "8"] },
      { prompt: "Da la instrucción: 'Por favor revisa el inventario'", expected: "Please check the inventory", keywords: ["please", "check", "inventory"] },
      { prompt: "Di: '¿Puedes trabajar horas extra hoy?'", expected: "Can you work overtime today?", keywords: ["work", "overtime", "today"] },
    ]
  },

  // ── LESSON 4 ──────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Daily Life & Routines",
    subtitle: "Vida Diaria y Rutinas",
    category: "daily",
    emoji: "☀️",
    color: "#ea580c",
    theory: {
      title: "Hablar de Tu Día a Día",
      sections: [
        {
          heading: "Verbos de Rutina Diaria",
          content: "Estos verbos te permiten hablar de lo que haces todos los días. Recuerda: con **he/she/it**, agrega **-s** al verbo.",
          table: {
            headers: ["Verbo", "Español", "Yo (I)", "Él/Ella (He/She)"],
            rows: [
              ["wake up", "despertar", "I wake up at 6.", "She wakes up at 7."],
              ["eat", "comer", "I eat breakfast.", "He eats lunch."],
              ["drive", "manejar", "I drive to work.", "She drives to school."],
              ["work", "trabajar", "I work 8 hours.", "He works downtown."],
              ["go", "ir", "I go to the gym.", "She goes home."],
              ["sleep", "dormir", "I sleep 7 hours.", "He sleeps early."],
            ]
          }
        },
        {
          heading: "Vocabulario – Vida Cotidiana",
          content: "Palabras para hablar de tu vida fuera del trabajo:",
          vocab: [
            { en: "Breakfast", es: "Desayuno", example: "I eat breakfast at 7 AM." },
            { en: "Lunch", es: "Almuerzo", example: "I have lunch at noon." },
            { en: "Dinner", es: "Cena", example: "We eat dinner together." },
            { en: "Commute", es: "Viaje al trabajo", example: "My commute is 30 minutes." },
            { en: "Neighborhood", es: "Vecindario", example: "My neighborhood is quiet." },
            { en: "Grocery store", es: "Supermercado", example: "I go to the grocery store." },
            { en: "Appointment", es: "Cita", example: "I have a doctor's appointment." },
            { en: "Weekend", es: "Fin de semana", example: "I rest on the weekend." },
          ]
        },
        {
          heading: "Conversaciones del Día a Día",
          phrases: [
            { en: "I wake up at 6 AM every day.", es: "Me despierto a las 6 AM todos los días." },
            { en: "I drive 20 minutes to work.", es: "Manejo 20 minutos al trabajo." },
            { en: "What do you do after work?", es: "¿Qué haces después del trabajo?" },
            { en: "I usually go to the gym.", es: "Generalmente voy al gimnasio." },
            { en: "Do you live far from here?", es: "¿Vives lejos de aquí?" },
            { en: "I live 10 minutes away.", es: "Vivo a 10 minutos de aquí." },
            { en: "What time do you start work?", es: "¿A qué hora empiezas a trabajar?" },
            { en: "I finish work at 5 PM.", es: "Termino de trabajar a las 5 PM." },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "Me despierto a las 6 AM.", answer: "I wake up at 6 AM.", hint: "I wake up at..." },
      { type: "translate", es: "Ella come desayuno a las 7.", answer: "She eats breakfast at 7.", hint: "She eats..." },
      { type: "translate", es: "Manejo 20 minutos al trabajo.", answer: "I drive 20 minutes to work.", hint: "I drive..." },
      { type: "translate", es: "Termino de trabajar a las 5 PM.", answer: "I finish work at 5 PM.", hint: "I finish work at..." },
      { type: "translate", es: "¿Vives lejos de aquí?", answer: "Do you live far from here?", hint: "Do you live..." },
      { type: "fill", sentence: "She ___ to the gym every day.", answer: "goes", hint: "'go' + s para she" },
      { type: "fill", sentence: "My commute ___ 30 minutes.", answer: "is", hint: "Verbo to be para 'it'" },
    ],
    writtenTest: [
      { q: "¿Cómo dices 'Me despierto a las 7 AM'?", options: ["I wake at 7.", "I wake up at 7 AM.", "I wakes up at 7.", "Wake up at 7 AM."], correct: 1 },
      { q: "Completa: 'She ___ to work.'", options: ["drive", "drives", "go", "goes"], correct: 1 },
      { q: "¿Qué significa 'Commute'?", options: ["Desayuno", "Cita", "Viaje al trabajo", "Vecindario"], correct: 2 },
      { q: "¿Cómo preguntas a qué hora alguien empieza a trabajar?", options: ["When do you sleep?", "What time do you start work?", "How far do you live?", "Where do you work?"], correct: 1 },
      { q: "¿Cómo dices 'Vivo a 10 minutos de aquí'?", options: ["I live far.", "I live near work.", "I live 10 minutes away.", "My house is 10."], correct: 2 },
      { q: "¿Qué significa 'Grocery store'?", options: ["Tienda de ropa", "Farmacia", "Supermercado", "Restaurante"], correct: 2 },
    ],
    voiceTest: [
      { prompt: "Di tu rutina matutina: 'Me despierto a las 6 AM'", expected: "I wake up at 6 AM", keywords: ["wake", "6"] },
      { prompt: "Pregunta: '¿Qué haces después del trabajo?'", expected: "What do you do after work?", keywords: ["do", "after", "work"] },
      { prompt: "Di: 'Generalmente voy al gimnasio'", expected: "I usually go to the gym", keywords: ["usually", "gym"] },
      { prompt: "Di: 'Termino de trabajar a las 5 PM'", expected: "I finish work at 5 PM", keywords: ["finish", "work", "5"] },
    ]
  },

  // ── LESSON 5 ──────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Small Talk & Social Conversations",
    subtitle: "Conversación Casual y Social",
    category: "daily",
    emoji: "💬",
    color: "#db2777",
    theory: {
      title: "Conversaciones Fluidas del Día a Día",
      sections: [
        {
          heading: "Preguntas Básicas para Conversar",
          content: "Para tener conversaciones fluidas, necesitas saber hacer y responder preguntas básicas con **DO / DOES** y **TO BE**.",
          table: {
            headers: ["Pregunta", "Respuesta corta", "Español"],
            rows: [
              ["Do you like coffee?", "Yes, I do. / No, I don't.", "¿Te gusta el café?"],
              ["Does he work here?", "Yes, he does. / No, he doesn't.", "¿Trabaja él aquí?"],
              ["Are you from here?", "Yes, I am. / No, I'm not.", "¿Eres de aquí?"],
              ["Is she your manager?", "Yes, she is. / No, she isn't.", "¿Es ella tu gerente?"],
              ["Do you speak Spanish?", "Yes, I do!", "¿Hablas español?"],
            ]
          }
        },
        {
          heading: "Vocabulario – Temas de Conversación",
          content: "Palabras para hablar sobre gustos, familia y el clima:",
          vocab: [
            { en: "Weather", es: "Clima / Tiempo", example: "The weather is nice today." },
            { en: "Family", es: "Familia", example: "My family is from Mexico." },
            { en: "Hobby", es: "Pasatiempo", example: "My hobby is cooking." },
            { en: "Favorite", es: "Favorito", example: "My favorite food is pizza." },
            { en: "Weekend", es: "Fin de semana", example: "I relax on the weekend." },
            { en: "Tired", es: "Cansado", example: "I am tired today." },
            { en: "Busy", es: "Ocupado", example: "She is very busy." },
            { en: "Excited", es: "Emocionado", example: "I am excited for the weekend." },
          ]
        },
        {
          heading: "Conversaciones Sociales Reales",
          phrases: [
            { en: "How was your weekend?", es: "¿Cómo estuvo tu fin de semana?" },
            { en: "It was great, thanks! And yours?", es: "¡Estuvo genial, gracias! ¿Y el tuyo?" },
            { en: "Are you from around here?", es: "¿Eres de por aquí?" },
            { en: "What do you do for fun?", es: "¿Qué haces para divertirte?" },
            { en: "The weather is beautiful today!", es: "¡El clima está hermoso hoy!" },
            { en: "I am so tired today.", es: "Estoy muy cansado hoy." },
            { en: "Do you have kids?", es: "¿Tienes hijos?" },
            { en: "I have two kids.", es: "Tengo dos hijos." },
            { en: "What's your favorite food?", es: "¿Cuál es tu comida favorita?" },
            { en: "See you tomorrow!", es: "¡Hasta mañana!" },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "El clima está hermoso hoy.", answer: "The weather is beautiful today.", hint: "The weather is..." },
      { type: "translate", es: "Estoy muy cansado hoy.", answer: "I am so tired today.", hint: "I am so..." },
      { type: "translate", es: "¿Cuál es tu comida favorita?", answer: "What is your favorite food?", hint: "What is your favorite..." },
      { type: "translate", es: "Tengo dos hijos.", answer: "I have two kids.", hint: "I have..." },
      { type: "translate", es: "¿Eres de por aquí?", answer: "Are you from around here?", hint: "Are you from..." },
      { type: "fill", sentence: "___ you like coffee?", answer: "Do", hint: "Palabra para hacer preguntas de acción" },
      { type: "fill", sentence: "She ___ very busy today.", answer: "is", hint: "Verbo to be para 'she'" },
    ],
    writtenTest: [
      { q: "¿Cómo preguntas sobre el fin de semana?", options: ["How is your day?", "How was your weekend?", "What is your hobby?", "Do you work weekends?"], correct: 1 },
      { q: "¿Qué significa 'The weather is beautiful today'?", options: ["El trabajo es bueno hoy", "El clima está hermoso hoy", "El fin de semana está cerca", "Estoy cansado hoy"], correct: 1 },
      { q: "Respuesta correcta a '¿Do you like coffee?'", options: ["Yes, I like.", "Yes, I am.", "Yes, I do.", "Yes, I does."], correct: 2 },
      { q: "¿Cómo dices 'Estoy emocionado'?", options: ["I am busy.", "I am tired.", "I am excited.", "I am from here."], correct: 2 },
      { q: "¿Qué significa 'Hobby'?", options: ["Trabajo", "Clima", "Pasatiempo", "Familia"], correct: 2 },
      { q: "¿Cómo te despides hasta el día siguiente?", options: ["Goodbye forever!", "See you tomorrow!", "Have a nice week!", "Good morning!"], correct: 1 },
    ],
    voiceTest: [
      { prompt: "Pregunta cómo estuvo el fin de semana de alguien", expected: "How was your weekend?", keywords: ["how", "weekend"] },
      { prompt: "Di: 'El clima está hermoso hoy'", expected: "The weather is beautiful today", keywords: ["weather", "beautiful"] },
      { prompt: "Di: 'Estoy muy cansado hoy'", expected: "I am so tired today", keywords: ["am", "tired"] },
      { prompt: "Despídete hasta mañana", expected: "See you tomorrow!", keywords: ["see", "tomorrow"] },
    ]
  },

  // ── LESSON 6 ──────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Asking for Help & Getting Around",
    subtitle: "Pedir Ayuda y Orientarse",
    category: "daily",
    emoji: "🗺️",
    color: "#0891b2",
    theory: {
      title: "Pedir Información y Orientarse",
      sections: [
        {
          heading: "Pedir Ayuda – Frases Clave",
          content: "Estas frases son esenciales para pedir ayuda o información en cualquier lugar. Son muy usadas en el trabajo y en la vida diaria.",
          table: {
            headers: ["Inglés", "Español", "Situación"],
            rows: [
              ["Excuse me, can you help me?", "Disculpe, ¿puede ayudarme?", "Pedir ayuda"],
              ["Where is the bathroom?", "¿Dónde está el baño?", "Orientación"],
              ["How do I get to...?", "¿Cómo llego a...?", "Direcciones"],
              ["Can you repeat that, please?", "¿Puede repetir eso?", "No entendí"],
              ["I don't understand.", "No entiendo.", "Confusión"],
              ["Can you speak slower?", "¿Puede hablar más despacio?", "Dificultad con idioma"],
            ]
          }
        },
        {
          heading: "Vocabulario – Lugares y Direcciones",
          content: "Palabras para orientarte en cualquier lugar:",
          vocab: [
            { en: "Straight ahead", es: "Recto / Derecho", example: "Go straight ahead." },
            { en: "Turn left / right", es: "Gira a la izquierda / derecha", example: "Turn left at the corner." },
            { en: "Next to", es: "Al lado de", example: "It is next to the bank." },
            { en: "Across from", es: "Frente a", example: "The store is across from the park." },
            { en: "Corner", es: "Esquina", example: "It is on the corner." },
            { en: "Block", es: "Cuadra", example: "Go two blocks north." },
            { en: "Entrance", es: "Entrada", example: "The entrance is on Main St." },
            { en: "Exit", es: "Salida", example: "The exit is to the right." },
          ]
        },
        {
          heading: "Conversaciones Útiles para Todos los Días",
          phrases: [
            { en: "Excuse me, where is the nearest ATM?", es: "Disculpe, ¿dónde está el cajero automático más cercano?" },
            { en: "Can you help me? I am lost.", es: "¿Puede ayudarme? Estoy perdido." },
            { en: "I don't speak English very well.", es: "No hablo inglés muy bien." },
            { en: "Can you write that down for me?", es: "¿Puede escribirlo para mí?" },
            { en: "What time does it close?", es: "¿A qué hora cierra?" },
            { en: "Is this the right way to...?", es: "¿Es este el camino correcto a...?" },
            { en: "Thank you so much for your help!", es: "¡Muchas gracias por su ayuda!" },
            { en: "You're welcome!", es: "¡De nada / Con gusto!" },
          ]
        }
      ]
    },
    practice: [
      { type: "translate", es: "Disculpe, ¿puede ayudarme?", answer: "Excuse me, can you help me?", hint: "Excuse me, can you..." },
      { type: "translate", es: "No entiendo.", answer: "I don't understand.", hint: "I don't..." },
      { type: "translate", es: "¿Puede hablar más despacio?", answer: "Can you speak slower?", hint: "Can you speak..." },
      { type: "translate", es: "La salida está a la derecha.", answer: "The exit is to the right.", hint: "The exit is..." },
      { type: "translate", es: "Muchas gracias por su ayuda.", answer: "Thank you so much for your help.", hint: "Thank you so much..." },
      { type: "fill", sentence: "Excuse me, ___ you help me?", answer: "can", hint: "Palabra para pedir algo cortésmente" },
      { type: "fill", sentence: "The store is ___ from the park.", answer: "across", hint: "'Frente a' en inglés" },
    ],
    writtenTest: [
      { q: "¿Cómo dices 'No entiendo'?", options: ["I don't speak.", "I don't understand.", "I am confused.", "I can't hear."], correct: 1 },
      { q: "¿Qué significa 'Turn left at the corner'?", options: ["Continúa recto en la esquina", "Gira a la derecha en la esquina", "Gira a la izquierda en la esquina", "Para en la esquina"], correct: 2 },
      { q: "¿Cómo pides que alguien repita algo?", options: ["Speak faster please.", "Can you repeat that, please?", "I understand.", "What time is it?"], correct: 1 },
      { q: "¿Qué significa 'Across from'?", options: ["Al lado de", "Detrás de", "Frente a", "Encima de"], correct: 2 },
      { q: "¿Cómo agradeces la ayuda de alguien?", options: ["Thank you so much for your help!", "Excuse me!", "I don't understand.", "Can you help?"], correct: 0 },
      { q: "¿Cómo dices 'Estoy perdido'?", options: ["I am tired.", "I am busy.", "I am lost.", "I am confused."], correct: 2 },
    ],
    voiceTest: [
      { prompt: "Pide ayuda cortésmente a alguien en la calle", expected: "Excuse me, can you help me?", keywords: ["excuse", "help"] },
      { prompt: "Di: 'No hablo inglés muy bien'", expected: "I don't speak English very well", keywords: ["speak", "english", "well"] },
      { prompt: "Di: '¿Puede hablar más despacio?'", expected: "Can you speak slower?", keywords: ["speak", "slower"] },
      { prompt: "Agradece la ayuda de alguien", expected: "Thank you so much for your help!", keywords: ["thank", "help"] },
    ]
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [phase, setPhase] = useState("theory");
  const [progress, setProgress] = useState(() => {
    const init = {};
    LESSONS.forEach(l => { init[l.id] = {}; });
    return init;
  });

  const openLesson = (lesson) => {
    setCurrentLesson(lesson);
    setPhase("theory");
    setScreen("lesson");
  };

  const markDone = (lessonId, ph, val) => {
    setProgress(p => ({ ...p, [lessonId]: { ...p[lessonId], [ph]: val } }));
  };

  const getPct = (id) => {
    const p = progress[id] || {};
    return Math.round(["theory","practice","written","voice"].filter(k => p[k] !== undefined).length / 4 * 100);
  };

  if (screen === "home") return <><style>{CSS}</style><HomeScreen lessons={LESSONS} onOpen={openLesson} getPct={getPct} /></>;
  return (
    <>
      <style>{CSS}</style>
      <LessonScreen
        lesson={currentLesson}
        phase={phase}
        setPhase={setPhase}
        progress={progress[currentLesson.id]}
        markDone={(ph, val) => markDone(currentLesson.id, ph, val)}
        onBack={() => setScreen("home")}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────────────────
function HomeScreen({ lessons, onOpen, getPct }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? lessons : lessons.filter(l => l.category === filter);
  const totalDone = lessons.filter(l => getPct(l.id) === 100).length;

  return (
    <div className="app">
      <header className="home-header">
        <div className="home-header-inner">
          <div className="header-logo">🎓</div>
          <h1 className="header-title">English for Life & Work</h1>
          <p className="header-sub">Retail · Gerencia · Vida Diaria · Conversación</p>
          {totalDone > 0 && (
            <div className="header-badge">{totalDone}/{lessons.length} lecciones completadas</div>
          )}
        </div>
      </header>

      <div className="home-body">
        <div className="filter-row">
          {[["all","Todas","📚"],["retail","Retail & Trabajo","🏪"],["daily","Vida Diaria","🌅"]].map(([v,l,e]) => (
            <button key={v} onClick={() => setFilter(v)}
              className={`filter-btn ${filter === v ? "filter-btn-active" : ""}`}>
              {e} {l}
            </button>
          ))}
        </div>

        <div className="lessons-list">
          {filtered.map(lesson => {
            const pct = getPct(lesson.id);
            return (
              <div key={lesson.id} className="lesson-card" style={{"--accent": lesson.color}}>
                <div className="card-left">
                  <span className="card-emoji">{lesson.emoji}</span>
                  <div>
                    <div className="card-label">Lección {lesson.id} · {lesson.category === "retail" ? "Trabajo" : "Vida Diaria"}</div>
                    <div className="card-title">{lesson.subtitle}</div>
                    <div className="card-subtitle">{lesson.title}</div>
                  </div>
                </div>
                <div className="card-right">
                  {pct === 100
                    ? <div className="pct-circle done">✓</div>
                    : pct > 0
                    ? <div className="pct-circle partial">{pct}%</div>
                    : <div className="pct-circle empty">→</div>
                  }
                </div>
                {pct > 0 && pct < 100 && (
                  <div className="card-progress">
                    <div className="card-progress-fill" style={{width:`${pct}%`, background: lesson.color}} />
                  </div>
                )}
                <button className="card-btn" style={{background: lesson.color}} onClick={() => onOpen(lesson)}>
                  {pct === 0 ? "▶ Comenzar" : pct === 100 ? "↩ Repasar" : "→ Continuar"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="tip-box">
          <div className="tip-icon">💡</div>
          <div>
            <strong>Orden recomendado:</strong> Teoría → Práctica → Test Escrito → Test de Voz<br/>
            <span style={{fontSize:12, color:"#666"}}>El Test de Voz requiere Chrome en PC o Safari en iPhone.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LESSON SCREEN
// ─────────────────────────────────────────────────────────────────────────────
function LessonScreen({ lesson, phase, setPhase, progress, markDone, onBack }) {
  const phases = ["theory","practice","written","voice"];
  const icons = { theory:"📖", practice:"✏️", written:"📝", voice:"🎤" };
  const labels = { theory:"Teoría", practice:"Práctica", written:"Test", voice:"Voz" };

  return (
    <div className="app">
      <div className="lesson-header" style={{background: lesson.color}}>
        <button className="back-btn" onClick={onBack}>← Inicio</button>
        <div className="lesson-header-text">
          <span className="lesson-num">Lección {lesson.id}</span>
          <span className="lesson-name">{lesson.subtitle}</span>
        </div>
        <span style={{fontSize:28}}>{lesson.emoji}</span>
      </div>

      <div className="phase-tabs">
        {phases.map(ph => (
          <button key={ph} onClick={() => setPhase(ph)}
            className={`phase-tab ${phase === ph ? "phase-tab-active" : ""} ${progress[ph] !== undefined ? "phase-tab-done" : ""}`}
            style={phase === ph ? {"--c": lesson.color} : {}}>
            <span className="tab-icon">{icons[ph]}</span>
            <span className="tab-label">{labels[ph]}</span>
            {progress[ph] !== undefined && <span className="tab-check">✓</span>}
          </button>
        ))}
      </div>

      <div className="phase-body">
        {phase === "theory"   && <TheoryPhase   lesson={lesson} onDone={() => { markDone("theory", true); setPhase("practice"); }} />}
        {phase === "practice" && <PracticePhase lesson={lesson} onDone={() => { markDone("practice", true); setPhase("written"); }} />}
        {phase === "written"  && <WrittenTest   lesson={lesson} onDone={s => { markDone("written", s); setPhase("voice"); }} />}
        {phase === "voice"    && <VoiceTest     lesson={lesson} onDone={s => markDone("voice", s)} />}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// THEORY
// ─────────────────────────────────────────────────────────────────────────────
function TheoryPhase({ lesson, onDone }) {
  const [sec, setSec] = useState(0);
  const sections = lesson.theory.sections;
  const s = sections[sec];

  return (
    <div>
      <div className="theory-card">
        <h2 className="theory-main-title">{lesson.theory.title}</h2>
        <div className="sec-nav">
          {sections.map((_,i) => (
            <button key={i} onClick={() => setSec(i)}
              className={`sec-dot ${sec === i ? "sec-dot-active" : ""}`}
              style={sec === i ? {background: lesson.color, borderColor: lesson.color} : {}}>
              {i+1}
            </button>
          ))}
        </div>

        <h3 className="sec-heading" style={{color: lesson.color}}>{s.heading}</h3>
        {s.content && <p className="sec-content" dangerouslySetInnerHTML={{__html: s.content.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}} />}

        {s.table && (
          <div className="table-wrap">
            <table className="data-table">
              <thead><tr>{s.table.headers.map(h=><th key={h}>{h}</th>)}</tr></thead>
              <tbody>{s.table.rows.map((r,i)=><tr key={i} className={i%2===0?"row-even":""}>{r.map((c,j)=><td key={j} dangerouslySetInnerHTML={{__html:c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}}/>)}</tr>)}</tbody>
            </table>
          </div>
        )}

        {s.vocab && (
          <div className="vocab-grid">
            {s.vocab.map((v,i) => (
              <div key={i} className="vocab-card">
                <div className="vocab-en">{v.en}</div>
                <div className="vocab-es">{v.es}</div>
                <div className="vocab-ex">{v.example}</div>
              </div>
            ))}
          </div>
        )}

        {s.phrases && (
          <div className="phrases-list">
            {s.phrases.map((p,i) => (
              <div key={i} className="phrase-row">
                <div className="phrase-en">🇺🇸 {p.en}</div>
                <div className="phrase-es">🇪🇸 {p.es}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="nav-row">
        {sec > 0 && <button className="btn-sec" onClick={() => setSec(s=>s-1)}>← Anterior</button>}
        {sec < sections.length-1
          ? <button className="btn-pri" style={{background: lesson.color}} onClick={() => setSec(s=>s+1)}>Siguiente →</button>
          : <button className="btn-pri" style={{background:"#16a34a"}} onClick={onDone}>✓ Ir a Práctica →</button>
        }
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICE
// ─────────────────────────────────────────────────────────────────────────────
function PracticePhase({ lesson, onDone }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [fb, setFb] = useState(null);
  const [hint, setHint] = useState("");
  const [loadHint, setLoadHint] = useState(false);
  const exercises = lesson.practice;
  const ex = exercises[idx];
  const norm = s => s.toLowerCase().replace(/[.,!?$'"]/g,"").replace(/\s+/g," ").trim();

  const check = () => {
    const ok = norm(input) === norm(ex.answer);
    setFb({ ok, answer: ex.answer });
  };

  const next = () => {
    if (idx < exercises.length-1) { setIdx(i=>i+1); setInput(""); setFb(null); setHint(""); }
    else onDone();
  };

  const getHint = async () => {
    setLoadHint(true);
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          messages:[{role:"user",content:`Eres un profesor de inglés amable para hispanohablantes principiantes que trabajan en retail/gerencia.\n\nEjercicio: Traducir "${ex.es}" al inglés.\nRespuesta correcta: "${ex.answer}"\nEscribió el estudiante: "${input||"(nada)"}"\n\nDa una pista muy corta en español (máximo 2 oraciones). Explica el patrón gramatical sin dar la respuesta completa. Usa ejemplos simples.`}]
        })
      });
      const d = await r.json();
      setHint(d.content?.[0]?.text || "Revisa la estructura del verbo.");
    } catch { setHint("Revisa el pronombre y la forma del verbo."); }
    setLoadHint(false);
  };

  return (
    <div>
      <div className="practice-header">
        <span className="practice-count">Ejercicio {idx+1} / {exercises.length}</span>
        <div className="mini-dots">
          {exercises.map((_,i)=><div key={i} className="mini-dot" style={{background: i<idx?"#16a34a":i===idx?"#2563eb":"#ddd"}}/>)}
        </div>
      </div>

      <div className="practice-card">
        <div className="practice-label">
          {ex.type === "translate" ? "✏️ Traduce al inglés:" : "✏️ Completa el espacio:"}
        </div>
        <div className="practice-prompt">
          {ex.type === "translate" ? `"${ex.es}"` : ex.sentence.replace("___","______")}
        </div>
        <div className="hint-chip">💡 Pista: {ex.hint}</div>

        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&!fb&&input.trim()&&check()}
          placeholder={ex.type==="translate"?"Escribe en inglés...":"Escribe la palabra..."}
          className={`practice-input ${fb ? (fb.ok?"input-ok":"input-err") : ""}`}
          disabled={!!fb}
        />

        {!fb && (
          <div className="btn-row">
            <button className="btn-check" onClick={check} disabled={!input.trim()}>Verificar</button>
            <button className="btn-hint" onClick={getHint} disabled={loadHint}>
              {loadHint ? "..." : "🤖 Pista del profe"}
            </button>
          </div>
        )}

        {hint && !fb && <div className="ai-box"><strong>🤖 Profesor:</strong> {hint}</div>}

        {fb && (
          <div className={`fb-box ${fb.ok?"fb-ok":"fb-err"}`}>
            <div className="fb-icon">{fb.ok?"✅":"❌"}</div>
            <div className="fb-title">{fb.ok?"¡Correcto!":"Incorrecto"}</div>
            {!fb.ok && <div className="fb-answer">Respuesta correcta: <strong>{fb.answer}</strong></div>}
            <button className="btn-pri" style={{marginTop:12, background:"#2563eb"}} onClick={next}>
              {idx<exercises.length-1?"Siguiente →":"✓ Terminar Práctica"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WRITTEN TEST
// ─────────────────────────────────────────────────────────────────────────────
function WrittenTest({ lesson, onDone }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const qs = lesson.writtenTest;
  const score = submitted ? qs.reduce((a,q,i)=>a+(answers[i]===q.correct?1:0),0) : 0;
  const pct = submitted ? Math.round(score/qs.length*100) : 0;

  return (
    <div>
      <div className="test-header">
        <div className="test-title">📝 Test Escrito</div>
        <div className="test-sub">{qs.length} preguntas · selección múltiple</div>
      </div>

      {qs.map((q,i) => (
        <div key={i} className="q-card">
          <div className="q-num">Pregunta {i+1} de {qs.length}</div>
          <div className="q-text">{q.q}</div>
          <div className="options">
            {q.options.map((opt,j) => {
              let cls = "option";
              if (submitted) {
                if (j===q.correct) cls+=" opt-correct";
                else if (answers[i]===j) cls+=" opt-wrong";
              } else if (answers[i]===j) cls+=" opt-selected";
              return (
                <button key={j} className={cls} onClick={()=>!submitted&&setAnswers(a=>({...a,[i]:j}))}>
                  <span className="opt-letter">{String.fromCharCode(65+j)}</span>
                  <span>{opt}</span>
                  {submitted && j===q.correct && <span className="opt-mark">✓</span>}
                  {submitted && answers[i]===j && j!==q.correct && <span className="opt-mark">✗</span>}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button className="btn-pri btn-full" style={{background:"#2563eb", opacity: Object.keys(answers).length<qs.length?0.5:1}}
          onClick={()=>setSubmitted(true)} disabled={Object.keys(answers).length<qs.length}>
          Enviar Respuestas
        </button>
      ) : (
        <div className="score-box">
          <div className="score-emoji">{pct>=80?"🏆":pct>=60?"👍":"📚"}</div>
          <div className="score-num">{score}/{qs.length}</div>
          <div className="score-pct">{pct}%</div>
          <div className="score-msg" style={{color:pct>=80?"#16a34a":pct>=60?"#d97706":"#dc2626"}}>
            {pct>=80?"¡Excelente trabajo!":pct>=60?"Buen intento. Repasa los errores.":"Revisa la teoría e inténtalo de nuevo."}
          </div>
          <button className="btn-pri" style={{marginTop:16, background:"#9333ea"}} onClick={()=>onDone(pct)}>
            → Ir al Test de Voz
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VOICE TEST
// ─────────────────────────────────────────────────────────────────────────────
function VoiceTest({ lesson, onDone }) {
  const [idx, setIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [fb, setFb] = useState(null);
  const [aiFb, setAiFb] = useState("");
  const [loadAi, setLoadAi] = useState(false);
  const [scores, setScores] = useState([]);
  const [done, setDone] = useState(false);
  const [noSupport, setNoSupport] = useState(false);
  const recRef = useRef(null);
  const qs = lesson.voiceTest;
  const q = qs[idx];

  const startRec = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setNoSupport(true); return; }
    const r = new SR();
    r.lang = "en-US";
    r.interimResults = false;
    r.onresult = e => setTranscript(e.results[0][0].transcript);
    r.onerror = () => setRecording(false);
    r.onend = () => setRecording(false);
    r.start();
    recRef.current = r;
    setRecording(true);
    setTranscript("");
    setFb(null);
    setAiFb("");
  };

  const stopRec = () => { recRef.current?.stop(); setRecording(false); };

  const evaluate = async () => {
    const t = transcript.toLowerCase();
    const hits = q.keywords.filter(kw => t.includes(kw.toLowerCase())).length;
    const ok = hits >= Math.ceil(q.keywords.length * 0.5);
    setFb({ ok, hits, total: q.keywords.length });
    setScores(s => [...s, ok ? 1 : 0]);

    setLoadAi(true);
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          messages:[{role:"user",content:`Eres un profesor de inglés muy alentador para hispanohablantes principiantes.\n\nEl estudiante dijo: "${transcript}"\nEsperado: "${q.expected}"\nPalabras clave encontradas: ${hits} de ${q.keywords.length}\n\nEn español, en máximo 3 oraciones: qué hizo bien, qué mejorar en pronunciación/vocabulario, y una corrección amable si hace falta. Sé muy positivo y motivador.`}]
        })
      });
      const d = await r.json();
      setAiFb(d.content?.[0]?.text || "¡Buen intento! Sigue practicando.");
    } catch { setAiFb("¡Buen intento! La práctica hace al maestro."); }
    setLoadAi(false);
  };

  const next = () => {
    if (idx < qs.length-1) { setIdx(i=>i+1); setTranscript(""); setFb(null); setAiFb(""); }
    else { setDone(true); onDone(Math.round(scores.reduce((a,b)=>a+b,0)/qs.length*100)); }
  };

  if (done) {
    const total = scores.reduce((a,b)=>a+b,0);
    return (
      <div className="done-screen">
        <div style={{fontSize:64}}>🎤✨</div>
        <h3 style={{color:"#9333ea",fontSize:22,margin:"8px 0"}}>¡Test de Voz Completado!</h3>
        <div className="score-box">
          <div className="score-num">{total}/{qs.length}</div>
          <div style={{color:"#555"}}>respuestas detectadas correctamente</div>
          <div style={{marginTop:12,fontWeight:600,color: total===qs.length?"#16a34a":"#d97706"}}>
            {total===qs.length?"¡Pronunciación excelente! 🏆":"¡Sigue practicando en voz alta! 💪"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="test-header">
        <div className="test-title">🎤 Test de Voz</div>
        <div className="test-sub">Pregunta {idx+1} de {qs.length} · Habla en inglés</div>
      </div>

      <div className="voice-card">
        <div className="voice-prompt">{q.prompt}</div>
        <div className="voice-ref">
          <span style={{fontWeight:700, color:"#9333ea"}}>Referencia:</span> "{q.expected}"
        </div>

        {noSupport && (
          <div className="warn-box">
            ⚠️ Tu navegador no soporta reconocimiento de voz.<br/>
            Usa <strong>Chrome en PC</strong> o <strong>Safari en iPhone</strong>.
          </div>
        )}

        <div style={{textAlign:"center", margin:"16px 0"}}>
          {!recording
            ? <button className="mic-btn" onClick={startRec}>🎤 Grabar</button>
            : <button className="mic-btn mic-btn-stop" onClick={stopRec}>⏹ Detener</button>
          }
        </div>

        {recording && <div className="listening-chip">🔴 Escuchando... habla ahora en inglés</div>}

        {transcript && (
          <div className="transcript-box">
            <div className="transcript-label">Lo que dijiste:</div>
            <div className="transcript-text">"{transcript}"</div>
            {!fb && <button className="btn-check" style={{marginTop:10,width:"100%"}} onClick={evaluate}>Evaluar</button>}
          </div>
        )}

        {loadAi && <div className="loading-chip">🤖 El profesor está evaluando...</div>}

        {fb && (
          <div className={`fb-box ${fb.ok?"fb-ok":"fb-warn"}`}>
            <div className="fb-icon">{fb.ok?"✅":"⚠️"}</div>
            <div className="fb-title">{fb.ok?"¡Excelente!":"¡Buen intento!"}</div>
            <div style={{fontSize:13,color:"#555",marginTop:4}}>
              Palabras detectadas: {fb.hits}/{fb.total}
            </div>
            {aiFb && <div className="ai-box" style={{marginTop:12}}><strong>🤖 Profesor:</strong> {aiFb}</div>}
            <button className="btn-pri" style={{marginTop:14,background:"#9333ea"}} onClick={next}>
              {idx<qs.length-1?"Siguiente →":"✓ Finalizar Lección"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS — Mobile-first, works on iPhone & PC
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f0f4f8; font-family: -apple-system, 'Segoe UI', sans-serif; }
  button { font-family: inherit; cursor: pointer; }
  input { font-family: inherit; }

  .app { max-width: 680px; margin: 0 auto; min-height: 100vh; background: #f0f4f8; }

  /* HOME HEADER */
  .home-header { background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #7c3aed 100%); color: #fff; padding: 0; }
  .home-header-inner { padding: 28px 20px 24px; text-align: center; }
  .header-logo { font-size: 44px; margin-bottom: 8px; }
  .header-title { font-size: clamp(20px, 5vw, 28px); font-weight: 800; letter-spacing: -0.5px; }
  .header-sub { font-size: 13px; opacity: 0.85; margin-top: 4px; }
  .header-badge { display: inline-block; margin-top: 10px; background: rgba(255,255,255,0.2); border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; }

  /* HOME BODY */
  .home-body { padding: 16px; }

  /* FILTER */
  .filter-row { display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 4px; }
  .filter-btn { flex-shrink: 0; padding: 8px 14px; border-radius: 20px; border: 2px solid #e2e8f0; background: #fff; font-size: 12px; font-weight: 600; color: #64748b; transition: all 0.2s; white-space: nowrap; }
  .filter-btn-active { background: #1e3a5f; border-color: #1e3a5f; color: #fff; }

  /* LESSON CARDS */
  .lessons-list { display: flex; flex-direction: column; gap: 12px; }
  .lesson-card { background: #fff; border-radius: 16px; padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); border-left: 5px solid var(--accent); display: grid; grid-template-columns: 1fr auto; gap: 8px; }
  .card-left { display: flex; align-items: flex-start; gap: 12px; grid-column: 1; }
  .card-right { grid-column: 2; display: flex; align-items: center; }
  .card-emoji { font-size: 32px; flex-shrink: 0; }
  .card-label { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 2px; }
  .card-title { font-size: 16px; font-weight: 700; color: #1e293b; line-height: 1.2; }
  .card-subtitle { font-size: 12px; color: #64748b; margin-top: 2px; }
  .pct-circle { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; flex-shrink: 0; }
  .pct-circle.done { background: #dcfce7; color: #16a34a; font-size: 18px; }
  .pct-circle.partial { background: #eff6ff; color: #2563eb; }
  .pct-circle.empty { background: #f1f5f9; color: #94a3b8; font-size: 18px; }
  .card-progress { grid-column: 1 / -1; height: 4px; background: #f1f5f9; border-radius: 2px; overflow: hidden; }
  .card-progress-fill { height: 100%; border-radius: 2px; transition: width 0.4s; }
  .card-btn { grid-column: 1 / -1; padding: 11px; border-radius: 10px; border: none; color: #fff; font-weight: 700; font-size: 14px; transition: opacity 0.2s; }
  .card-btn:active { opacity: 0.8; }

  /* TIP */
  .tip-box { margin-top: 16px; background: #eff6ff; border-radius: 12px; padding: 14px 16px; display: flex; gap: 10px; align-items: flex-start; }
  .tip-icon { font-size: 20px; flex-shrink: 0; }

  /* LESSON HEADER */
  .lesson-header { color: #fff; padding: 16px; display: flex; align-items: center; gap: 12px; }
  .back-btn { background: rgba(255,255,255,0.2); border: none; color: #fff; padding: 7px 12px; border-radius: 8px; font-size: 13px; font-weight: 600; flex-shrink: 0; }
  .lesson-header-text { flex: 1; }
  .lesson-num { display: block; font-size: 11px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px; }
  .lesson-name { font-size: clamp(15px, 4vw, 19px); font-weight: 700; }

  /* PHASE TABS */
  .phase-tabs { display: flex; background: #fff; border-bottom: 2px solid #e2e8f0; overflow-x: auto; }
  .phase-tab { flex: 1; min-width: 70px; padding: 10px 4px 8px; border: none; border-bottom: 3px solid transparent; background: none; display: flex; flex-direction: column; align-items: center; gap: 2px; color: #94a3b8; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.2s; }
  .phase-tab-active { border-bottom-color: var(--c, #2563eb); color: var(--c, #2563eb); }
  .phase-tab-done { color: #16a34a; }
  .tab-icon { font-size: 16px; }
  .tab-check { font-size: 10px; color: #16a34a; }

  /* PHASE BODY */
  .phase-body { padding: 14px; }

  /* THEORY */
  .theory-card { background: #fff; border-radius: 14px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-bottom: 12px; }
  .theory-main-title { font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 14px; }
  .sec-nav { display: flex; gap: 8px; margin-bottom: 16px; }
  .sec-dot { width: 30px; height: 30px; border-radius: 50%; border: 2px solid #e2e8f0; background: #f8fafc; font-weight: 700; font-size: 13px; color: #94a3b8; transition: all 0.2s; }
  .sec-dot-active { color: #fff; }
  .sec-heading { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
  .sec-content { font-size: 14px; color: #475569; line-height: 1.6; margin-bottom: 14px; }

  /* TABLE */
  .table-wrap { overflow-x: auto; margin-bottom: 14px; border-radius: 10px; border: 1px solid #e2e8f0; }
  .data-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 300px; }
  .data-table th { background: #1e3a5f; color: #fff; padding: 9px 12px; text-align: left; font-weight: 600; }
  .data-table td { padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #334155; }
  .row-even { background: #f8fafc; }

  /* VOCAB */
  .vocab-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
  .vocab-card { background: #f8fafc; border-radius: 10px; padding: 10px 12px; border: 1px solid #e2e8f0; }
  .vocab-en { font-weight: 700; color: #1e293b; font-size: 15px; }
  .vocab-es { color: #64748b; font-size: 12px; margin: 2px 0; }
  .vocab-ex { color: #2563eb; font-size: 12px; font-style: italic; }

  /* PHRASES */
  .phrases-list { display: flex; flex-direction: column; gap: 8px; }
  .phrase-row { background: #f8fafc; border-radius: 10px; padding: 10px 14px; border-left: 3px solid #e2e8f0; }
  .phrase-en { font-weight: 600; color: #1e293b; font-size: 14px; margin-bottom: 3px; }
  .phrase-es { color: #64748b; font-size: 13px; }

  /* NAV */
  .nav-row { display: flex; gap: 10px; justify-content: flex-end; }
  .btn-pri { background: #2563eb; color: #fff; border: none; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 14px; }
  .btn-sec { background: #f1f5f9; color: #334155; border: none; padding: 12px 18px; border-radius: 10px; font-weight: 600; font-size: 14px; }
  .btn-full { width: 100%; }

  /* PRACTICE */
  .practice-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .practice-count { font-size: 13px; color: #64748b; font-weight: 600; }
  .mini-dots { display: flex; gap: 5px; }
  .mini-dot { width: 10px; height: 10px; border-radius: 50%; }
  .practice-card { background: #fff; border-radius: 14px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .practice-label { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .practice-prompt { font-size: clamp(18px, 5vw, 22px); font-weight: 700; color: #1e293b; margin-bottom: 12px; line-height: 1.3; }
  .hint-chip { display: inline-block; background: #fef3c7; color: #92400e; font-size: 12px; padding: 5px 12px; border-radius: 20px; margin-bottom: 14px; }
  .practice-input { width: 100%; padding: 13px 14px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; transition: border 0.2s; }
  .practice-input:focus { border-color: #2563eb; }
  .input-ok { border-color: #16a34a !important; background: #f0fdf4; }
  .input-err { border-color: #dc2626 !important; background: #fef2f2; }
  .btn-row { display: flex; gap: 8px; margin-top: 12px; }
  .btn-check { flex: 1; background: #2563eb; color: #fff; border: none; padding: 12px; border-radius: 10px; font-weight: 700; font-size: 14px; }
  .btn-hint { background: #f1f5f9; color: #334155; border: none; padding: 12px 14px; border-radius: 10px; font-weight: 600; font-size: 13px; }
  .ai-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 12px 14px; font-size: 13px; color: #1e40af; margin-top: 12px; line-height: 1.5; }
  .fb-box { border: 2px solid; border-radius: 12px; padding: 16px; margin-top: 12px; text-align: center; }
  .fb-ok { background: #dcfce7; border-color: #16a34a; }
  .fb-err { background: #fee2e2; border-color: #dc2626; }
  .fb-warn { background: #fef9c3; border-color: #ca8a04; }
  .fb-icon { font-size: 28px; margin-bottom: 4px; }
  .fb-title { font-weight: 700; font-size: 16px; margin-bottom: 4px; }
  .fb-answer { font-size: 13px; color: #555; }

  /* TEST */
  .test-header { margin-bottom: 14px; }
  .test-title { font-size: 20px; font-weight: 700; color: #1e293b; }
  .test-sub { font-size: 13px; color: #64748b; margin-top: 2px; }
  .q-card { background: #fff; border-radius: 14px; padding: 16px; margin-bottom: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
  .q-num { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .q-text { font-size: 15px; font-weight: 600; color: #1e293b; margin-bottom: 12px; line-height: 1.4; }
  .options { display: flex; flex-direction: column; gap: 7px; }
  .option { display: flex; align-items: center; gap: 10px; padding: 10px 13px; border-radius: 10px; border: 2px solid #e2e8f0; background: #f8fafc; font-size: 14px; text-align: left; color: #334155; transition: all 0.15s; }
  .option:active { opacity: 0.8; }
  .opt-selected { background: #eff6ff; border-color: #2563eb; color: #1d4ed8; }
  .opt-correct { background: #dcfce7 !important; border-color: #16a34a !important; color: #15803d !important; }
  .opt-wrong { background: #fee2e2 !important; border-color: #dc2626 !important; color: #dc2626 !important; }
  .opt-letter { width: 24px; height: 24px; border-radius: 50%; background: rgba(0,0,0,0.07); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 11px; flex-shrink: 0; }
  .opt-mark { margin-left: auto; font-weight: 700; }
  .score-box { background: #fff; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.07); }
  .score-emoji { font-size: 48px; }
  .score-num { font-size: 48px; font-weight: 800; color: #1e293b; }
  .score-pct { font-size: 18px; color: #64748b; }
  .score-msg { font-weight: 600; font-size: 15px; margin-top: 6px; }

  /* VOICE */
  .voice-card { background: #fff; border-radius: 14px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .voice-prompt { font-size: clamp(16px, 4vw, 19px); font-weight: 700; color: #1e293b; margin-bottom: 10px; line-height: 1.4; }
  .voice-ref { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 10px 14px; font-size: 13px; color: #581c87; margin-bottom: 14px; line-height: 1.5; }
  .mic-btn { background: #9333ea; color: #fff; border: none; padding: 14px 36px; border-radius: 50px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 16px rgba(147,51,234,0.3); }
  .mic-btn-stop { background: #dc2626; box-shadow: 0 4px 16px rgba(220,38,38,0.3); animation: pulse 1.2s infinite; }
  .listening-chip { background: #fef2f2; color: #dc2626; text-align: center; padding: 8px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-bottom: 12px; }
  .transcript-box { background: #f8fafc; border-radius: 10px; padding: 14px; margin-bottom: 10px; }
  .transcript-label { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .transcript-text { font-size: 16px; color: #1e293b; font-weight: 600; margin-bottom: 10px; }
  .loading-chip { background: #eff6ff; color: #2563eb; text-align: center; padding: 10px; border-radius: 8px; font-size: 13px; font-weight: 600; }
  .warn-box { background: #fef3c7; border: 1px solid #fde68a; border-radius: 10px; padding: 12px 14px; font-size: 13px; color: #92400e; margin-bottom: 12px; line-height: 1.5; }
  .done-screen { text-align: center; padding: 32px 16px; }

  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }

  /* RESPONSIVE */
  @media (max-width: 400px) {
    .vocab-grid { grid-template-columns: 1fr; }
    .phase-tab { min-width: 60px; }
    .tab-label { font-size: 9px; }
  }
`;
