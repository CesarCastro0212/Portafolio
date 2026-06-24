<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOS ROBBIE | Indie Rock Official</title>
    <!-- Google Fonts: Anton for headers (Rock vibe), Inter for body -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkBase: '#1a1a1a',      // Very dark gray, not pure black
                        accentOrange: '#f97316',  // Vivid Orange
                        softPurple: '#3730a3',    // Soft dark purple
                        blueGray: '#334155',      // Blue-gray secondary
                    },
                    fontFamily: {
                        rock: ['Anton', 'sans-serif'],
                        body: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'photo-flash': 'photo-flash 6s infinite',
                        'spin-slow': 'spin 8s linear infinite',
                        'fade-in-up': 'fadeInUp 1s ease-out forwards',
                    },
                    keyframes: {
                        'photo-flash': {
                            '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
                            '10%': { filter: 'brightness(1.5) contrast(1.2)' },
                            '12%': { filter: 'brightness(2) grayscale(0.2)' },
                            '15%': { filter: 'brightness(1) contrast(1)' },
                            '50%': { transform: 'scale(1.05)', filter: 'brightness(0.9)' },
                            '60%': { filter: 'brightness(1.8)' },
                            '62%': { filter: 'brightness(1)' },
                        },
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #1a1a1a;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
            background: #f97316;
            border-radius: 5px;
        }

        /* Glassmorphism for Navbar & Modals */
        .glass {
            background: rgba(26, 26, 26, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Custom Hover Effects */
        .btn-orange {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .btn-orange::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: all 0.4s ease;
        }
        .btn-orange:hover::before {
            left: 100%;
        }

        /* Image parallax and flash layer */
        .hero-overlay {
            background: linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,1) 100%);
        }
        
        /* Modals */
        .modal {
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease-in-out;
        }
        .modal.active {
            opacity: 1;
            pointer-events: auto;
        }
        .modal-content {
            transform: scale(0.95);
            transition: all 0.3s ease-in-out;
        }
        .modal.active .modal-content {
            transform: scale(1);
        }

        /* Spotty Player Progress */
        input[type=range] {
            -webkit-appearance: none;
            background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: #f97316;
            cursor: pointer;
            margin-top: -4px;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #4b5563;
            border-radius: 2px;
        }
    </style>
</head>
<body class="antialiased selection:bg-accentOrange selection:text-white">
