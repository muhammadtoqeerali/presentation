<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhD Final Presentation - Muhammad Toqeer Ali</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: white;
            color: #333;
            overflow: hidden;
        }

        .presentation-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        /* Logo styling */
        .logo-container {
            position: fixed;
            top: 10px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1001;
            height: 60px;
        }

        .university-logo {
            height: 100px;
            width: auto;
        }

        .team-logo {
            height: 100px;
            width: auto;
        }

        /* Adjust slide content to avoid logo overlap */
        .slide {
            margin-top: 70px;
            height: calc(85vh - 70px);
        }

        .slide {
            width: 90vw;
            height: 85vh;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            padding: 40px;
            display: none;
            animation: slideIn 0.8s ease-out;
            position: relative;
            overflow-y: auto;
        }

        .slide.active {
            display: block;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .slide-content > * {
            animation: fadeInUp 1s ease-out;
            animation-fill-mode: both;
        }

        .slide-content > *:nth-child(1) { animation-delay: 0.1s; }
        .slide-content > *:nth-child(2) { animation-delay: 0.2s; }
        .slide-content > *:nth-child(3) { animation-delay: 0.3s; }
        .slide-content > *:nth-child(4) { animation-delay: 0.4s; }
        .slide-content > *:nth-child(5) { animation-delay: 0.5s; }

        .slide-header {
            border-bottom: 3px solid #2c5aa0;
            padding-bottom: 15px;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .slide-number {
            background: #2c5aa0;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
        }

        h1 {
            font-size: 2.5em;
            color: #2c5aa0;
            margin-bottom: 20px;
            text-align: center;
        }

        h2 {
            font-size: 2em;
            color: #2c5aa0;
            margin-bottom: 20px;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
        }

        h3 {
            font-size: 1.4em;
            color: #444;
            margin: 20px 0 15px 0;
        }

        .university-header {
            text-align: center;
            margin-bottom: 30px;
            color: #2c5aa0;
            font-size: 1.1em;
            font-weight: 600;
        }

        .title-slide {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }

        .main-title {
            font-size: 3em;
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.5em;
            color: #666;
            margin-bottom: 40px;
        }

        .author-info {
            font-size: 1.2em;
            color: #444;
            margin-bottom: 20px;
        }

        .author-info strong {
            color: #2c5aa0;
        }

        .bullet-point {
            display: flex;
            align-items: flex-start;
            margin: 15px 0;
            padding: 10px;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }


        /* Advanced Comment System Styles */
        .floating-comment-btn {
            position: fixed;
            bottom: 400px;
            right: 20px;
            left: 90%;
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            color: white;
            box-shadow: 0 8px 25px rgba(255,107,107,0.4);
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .floating-comment-btn:hover {
            transform: scale(1.1) translateY(-2px);
            box-shadow: 0 12px 35px rgba(255,107,107,0.5);
        }
        .comment-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #ff4757;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            font-size: 12px;
            font-weight: bold;
            display: none;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        }

        .comment-badge.show { display: flex; }

        .comment-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: none;
            z-index: 9999;
            backdrop-filter: blur(5px);
            align-items: center;
            justify-content: center;
        }

        .comment-overlay.active { display: flex; }

        .comment-panel {
            background: white;
            border-radius: 20px;
            padding: 30px;
            width: 500px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0,0,0,0.4);
            animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
            to { 
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .comment-panel h3 {
            color: #2c5aa0;
            font-size: 1.5em;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .close-btn {
            background: #ff4757;
            color: white;
            border: none;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-btn:hover {
            background: #ff3742;
            transform: scale(1.1);
        }

        .comment-list {
            max-height: 300px;
            overflow-y: auto;
            margin-bottom: 20px;
        }

        .comment-item {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
            border-left: 4px solid #2c5aa0;
        }

        .comment-item:hover {
            background: #e8f4f8;
            transform: translateX(5px);
        }

        .comment-author {
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 5px;
        }

        .comment-time {
            font-size: 0.85em;
            color: #6c757d;
            margin-bottom: 8px;
        }

        .comment-text {
            color: #495057;
            line-height: 1.5;
        }

        .comment-form {
            border-top: 1px solid #e9ecef;
            padding-top: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #495057;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 14px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #2c5aa0;
            box-shadow: 0 0 0 3px rgba(44,90,160,0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }

        .form-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: #2c5aa0;
            color: white;
        }

        .btn-primary:hover {
            background: #1e3f70;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #545b62;
            transform: translateY(-2px);
        }

        .admin-controls {
            position: fixed;
            top: 400px;
            left: 1650px;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
            z-index: 1000;
            min-width: 200px;
        }

        .admin-controls h4 {
            margin-bottom: 10px;
            color: #2c5aa0;
            font-size: 14px;
        }

        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
            margin-right: 10px;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 24px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #2c5aa0;
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        .no-comments {
            text-align: center;
            color: #6c757d;
            font-style: italic;
            padding: 40px 20px;
            background: #f8f9fa;
            border-radius: 10px;
            margin: 20px 0;
        }

        /* Hide comments in presentation mode */
        .presentation-mode .admin-controls,
        .presentation-mode .floating-comment-btn {
            display: none !important;
        }

        .comments-disabled .floating-comment-btn {
            display: none !important;
        }

        .bullet-point:hover {
            background-color: #f8f9fa;
            transform: translateX(5px);
            transition: all 0.3s ease;
        }

        .bullet-icon {
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .highlight-box {
            background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
            border-left: 5px solid #2c5aa0;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .achievement-box {
            background: linear-gradient(135deg, #e8f5e8, #fff3e0);
            border-left: 5px solid #4caf50;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .performance-metric {
            display: inline-block;
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            margin: 10px;
            font-size: 1.1em;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transform: translateY(0);
            transition: transform 0.3s ease;
        }

        .performance-metric:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }

        .methodology-flow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .flow-step {
            background: white;
            border: 3px solid #2c5aa0;
            border-radius: 15px;
            padding: 20px;
            margin: 10px;
            text-align: center;
            flex: 1;
            min-width: 200px;
            position: relative;
            transition: all 0.3s ease;
        }

        .flow-step:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(44,90,160,0.3);
        }

        .flow-step::after {
            content: "→";
            position: absolute;
            right: -25px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 2em;
            color: #2c5aa0;
            font-weight: bold;
        }

        .flow-step:last-child::after {
            display: none;
        }

        .navigation {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 15px;
            z-index: 1000;
        }

        .nav-btn {
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .nav-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }

        .nav-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
        }

        .slide-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.9);
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
            color: #2c5aa0;
            backdrop-filter: blur(10px);
        }

        .timeline {
            position: relative;
            margin: 30px 0;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 30px;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(to bottom, #2c5aa0, #764ba2);
        }

        .timeline-item {
            position: relative;
            padding: 20px 0 20px 80px;
            margin: 20px 0;
        }

        .timeline-marker {
            position: absolute;
            left: 18px;
            top: 25px;
            width: 24px;
            height: 24px;
            background: #2c5aa0;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 0 0 3px #2c5aa0;
        }

        .timeline-year {
            font-size: 1.3em;
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 10px;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .comparison-table th {
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            color: white;
            padding: 15px;
            text-align: left;
            font-size: 1.1em;
        }

        .comparison-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
            transition: background-color 0.3s ease;
        }

        .comparison-table tr:hover td {
            background-color: #f8f9fa;
        }

        .impact-metric {
            text-align: center;
            margin: 20px;
        }

        .metric-number {
            font-size: 3em;
            font-weight: bold;
            background: linear-gradient(135deg, #2c5aa0, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .metric-label {
            font-size: 1.2em;
            color: #666;
            margin-top: 10px;
        }

        .conclusion-highlight {
            background: linear-gradient(135deg, #fff3e0, #e8f5e8);
            border: 2px solid #4caf50;
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .conclusion-highlight::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(76,175,80,0.1), transparent);
            animation: shine 3s infinite;
        }

        @keyframes shine {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .publication-card {
            background: white;
            border: 2px solid #2c5aa0;
            border-radius: 15px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .publication-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .award-badge {
            background: linear-gradient(135deg, #ffd700, #ffed4a);
            color: #8b6914;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin: 10px 0;
            border: 2px solid #f1c40f;
        }

        /* Citation styles */
        .citation, cite {
            color: #2c5aa0;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
            padding: 2px 4px;
            border-radius: 3px;
            transition: background-color 0.3s ease;
        }

        .citation:hover, cite:hover {
            background-color: #e8f4f8;
            text-decoration: underline;
        }

        /* NEW CSS FOR TOC GRID - ADD THIS */
        .toc-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }

        .toc-section {
            background: #f8f9fa;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .toc-section h3 {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #2c5aa0;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 10px;
        }

        .toc-icon {
            font-size: 1.5em;
            margin-right: 10px;
        }
        /* Figure improvements */
        .figure-placeholder {
            border: 2px solid #2c5aa0;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            background-color: #f8f9fa;
            font-weight: bold;
            border-radius: 10px;
        }

        .figure-placeholder img {
            max-width: 100%;
            height: auto;
            border: 2px solid #2c5aa0;
            border-radius: 5px;
        }

        .figure-caption {
            text-align: center;
            font-style: italic;
            font-size: 11pt;
            margin: 10px 0 20px 0;
        }


        /* Print styles for handouts */
        @media print {
            body {
                background: white !important;
                overflow: visible !important;
            }
            
            .slide {
                display: block !important;
                width: 100% !important;
                height: auto !important;
                page-break-after: always;
                box-shadow: none !important;
                border: 1px solid #ccc;
                margin-bottom: 20px;
            }
            
            .navigation, .slide-indicator, .admin-controls, .floating-comment-btn, .comment-overlay {
                display: none !important;
            }
            
            .slide-header {
                border-bottom: 2px solid #2c5aa0 !important;
            }
            
            h1, h2, h3 {
                color: #000 !important;
            }
            
            .bullet-icon {
                background: #2c5aa0 !important;
                color: white !important;
            }
            
            .performance-metric {
                background: #f0f0f0 !important;
                color: #000 !important;
                border: 1px solid #ccc !important;
            }
        }

        /* Presentation mode styles */
        .presentation-mode .navigation {
            transition: opacity 0.3s ease;
        }

        .presentation-mode .slide-indicator {
            transition: opacity 0.3s ease;
        }

        /* Enhanced animations */
        .conclusion-slide .conclusion-highlight {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .slide {
                width: 98vw;
                height: 95vh;
                padding: 20px;
            }
            
            .navigation {
                bottom: 10px;
                gap: 10px;
            }
            
            .nav-btn {
                padding: 10px 15px;
                font-size: 14px;
            }
            
            .main-title {
                font-size: 2em !important;
            }
            
            .methodology-flow {
                flex-direction: column;
            }
            
            .flow-step {
                margin: 5px;
            }
            
            .impact-metric {
                margin: 5px;
                padding: 10px 15px;
                font-size: 1em;
            }

            .floating-comment-btn {
                width: 60px;
                height: 60px;
                font-size: 20px;
                bottom: 80px;
                right: 20px;
            }
            
            .admin-controls {
                top: 10px;
                left: 10px;
                padding: 10px;
                min-width: 150px;
            }

            .comment-panel {
                width: 95vw;
                padding: 20px;
            }
        }

        @media (max-width: 1200px) {
            .slide {
                width: 95vw;
                height: 90vh;
                padding: 30px;
            }
            
            .main-title {
                font-size: 2.5em;
            }
            
            .methodology-flow {
                flex-direction: column;
            }
            
            .flow-step::after {
                content: "↓";
                right: 50%;
                bottom: -25px;
                top: auto;
                transform: translateX(50%);
            }
        }
    </style>
</head>
<body>

    <div class="logo-container">
        <img src="./university-logo.png" alt="Università di Verona" class="university-logo">
        <img src="./team-logo.png" alt="ISD Team Logo" class="team-logo">
    </div>
    
        <!-- Admin Controls -->
    <div class="admin-controls">
        <h4>💬 Comment System</h4>
        <label class="toggle-switch">
            <input type="checkbox" id="enableComments" checked onchange="toggleCommentsSystem()">
            <span class="slider"></span>
        </label>
        <span>Enable Comments</span>
        <br><br>
        <div style="display: flex; gap: 15px;">
            <button class="btn btn-secondary" onclick="exportAllComments()" style="font-size: 11px; padding: 6px 20px;">
                📁 Export
            </button>
            <button class="btn btn-secondary" onclick="clearAllComments()" style="font-size: 11px; padding: 6px 10px; background: #dc3545;">
                🗑️ Clear
            </button>
        </div>
    </div>

    <div class="presentation-container">
        <div class="slide-indicator">
            Slide <span id="currentSlide">1</span> of <span id="totalSlides">31</span>
        </div>

        <!-- Slide 1: Title -->
        <div class="slide active">
            <div class="slide-content title-slide">
                <div class="university-header">
                    UNIVERSITÀ DI VERONA<br>
                    Department of Engineering for Innovation Medicine<br>
                    PhD Program in Computer Science
                </div>
                <h1 class="main-title">Assistive Solutions for Frail People</h1>
                <div class="subtitle">From Sleep Monitoring to Pre-Impact Fall Detection<br>A Complete PhD Journey</div>
                <div class="author-info">
                    <strong>Author:</strong> Muhammad Toqeer Ali<br>
                    <strong>Supervisor:</strong> Prof. Graziano Pravadelli<br>
                    <strong>Co-Supervisor:</strong> Dr. Florenc Demrozi<br>
                    <strong>Academic Year:</strong> 2022-2025
                </div>
                <div style="margin-top: 30px; font-size: 1.1em; color: #2c5aa0; font-weight: bold;">
                    September 2025
                </div>
            </div>
        </div>

<!-- Updated Table of Contents with Correct Slide Alignment -->
        <div class="slide">
            <div class="slide-header">
                <h2>📚 Table of Contents</h2>
                <div class="slide-number">2/31</div>
            </div>
            <div class="slide-content">
                <div class="toc-grid">
                    <div class="toc-section">
                        <h3><div class="toc-icon">🎯</div>Foundation & Goals</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">3</div>
                            <div>PhD Goals & PNRR Alignment</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">4</div>
                            <div>Research Evolution Timeline</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">5</div>
                            <div>Strategic Pivot Justification</div>
                        </div>
                    </div>
                    
                    <div class="toc-section">
                        <h3><div class="toc-icon">📚</div>Year 1 (2022-2023)</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">6</div>
                            <div>Systematic Literature Review</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">7</div>
                            <div>PRISMA Flow Diagram</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">8</div>
                            <div>IEEE Access Publication</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">9</div>
                            <div>Technology Domain Analysis</div>
                        </div>
                    </div>
                    
                    <div class="toc-section">
                        <h3><div class="toc-icon">🎯</div>Year 2 (2023-2024)</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">10</div>
                            <div>Strategic Pivot to Fall Detection</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">11-13</div>
                            <div>Fall Stages & Pre-Impact Innovation</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">14-16</div>
                            <div>Lightweight CNN Development</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">17-19</div>
                            <div>Implementation & Results</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">19</div>
                            <div>DATE 2025 Best Paper Award</div>
                        </div>
                    </div>
                    
                    <div class="toc-section">
                        <h3><div class="toc-icon">🚧</div>Year 2→3 Transition</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">20</div>
                            <div>Real-World Challenge Discovery</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">21</div>
                            <div>Field Testing Issues Analysis</div>
                        </div>
                    </div>
                    
                    <div class="toc-section">
                        <h3><div class="toc-icon">🚀</div>Year 3 (2024-2025)</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">22</div>
                            <div>Updated Methodology Pipeline</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">23-24</div>
                            <div>Advanced Data Augmentation</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">25-26</div>
                            <div>Event-Level Classification</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">27</div>
                            <div>Breakthrough Performance Results</div>
                        </div>
                    </div>
                    
                    <div class="toc-section">
                        <h3><div class="toc-icon">🌍</div>Collaboration & Impact</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">28</div>
                            <div>International Collaboration Network</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">29</div>
                            <div>Publications and Recognition</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">30</div>
                            <div>Conclusion & Mission Accomplished</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">31</div>
                            <div>Thank You & Questions</div>
                        </div>
                    </div>
                </div>
                
                <div class="highlight-box" style="text-align: center;">
                    <h3>🎯 Journey Outcome: From Research Foundation to Commercial-Ready Technology</h3>
                </div>
            </div>
        </div>

        <!-- Slide 3: PhD Goals and PNRR Alignment -->
        <div class="slide">
            <div class="slide-header">
                <h2>PhD Goals & PNRR Alignment</h2>
                <div class="slide-number">3/31</div>
            </div>
            <div class="slide-content">
                <div class="highlight-box">
                    <h3>🎯 Primary PhD Objective (2022)</h3>
                    <p>Define and implement assistive home automation solutions and virtual coaching tools based on wearable systems and IoT for Parkinson's patients and elderly populations.</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div style="flex: 1;">
                        <h3 style="color: #2c5aa0;">🇮🇹 PNRR Mission Alignment</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">1</div>
                            <div><strong>Mission 1:</strong> Digital Transformation through IoT & AI</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">5</div>
                            <div><strong>Mission 5:</strong> Social Inclusion for aging populations</div>
                        </div>
                        <div style="font-size: 12px; color: #666; margin-top: 10px; font-style: italic;">
                            *Note: Missions 2-4 address different domains (environment, infrastructure, education) not directly relevant to this research
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h3 style="color: #2c5aa0;">🎯 Initial Target Applications</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🏠</div>
                            <div><strong>Home Monitoring:</strong> Assistive automation solutions</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">😴</div>
                            <div><strong>Sleep Monitoring:</strong> Parkinson's patient care</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🚨</div>
                            <div><strong>Fall Detection:</strong> Emergency response systems</div>
                        </div>
                    </div>
                </div>
                
                <div class="achievement-box">
                    <h3>💭 Research Philosophy</h3>
                    <p>Maintain core objectives while adapting technical approaches based on practical constraints and emerging opportunities</p>
                </div>
            </div>
        </div>

        <!-- Slide 4: Research Evolution Timeline -->
        <div class="slide">
            <div class="slide-header">
                <h2>Research Evolution Timeline</h2>
                <div class="slide-number">4/31</div>
            </div>
            <div class="slide-content">
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">2022-2023: Foundation Year</div>
                        <p><strong>Literature Review:</strong> Analyzed 2,459 papers on ICT-based Alzheimer's care solutions <cite>[1]</cite></p>
                        <p><strong>Publication:</strong> IEEE Access survey paper establishing field overview</p>
                        <p><strong>Technical Exploration:</strong> Initial sleep monitoring system development using BAN devices</p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">2023-2024: Strategic Pivot</div>
                        <p><strong>Direction Change:</strong> Transitioned from sleep monitoring to fall detection</p>
                        <p><strong>Achievement:</strong> 86.69% F1-score with lightweight CNN on STM32 <cite>[2]</cite></p>
                        <p><strong>Recognition:</strong> DATE 2025 Best Paper Award</p>
                    </div>
                
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">2024-2025: Real-World Challenges & Breakthrough</div>
                        <p><strong>Challenge Identified:</strong> Year 2 field testing revealed false alarms from sudden construction movements</p>
                        <p><strong>Systematic Solutions:</strong> New construction dataset + Prof. Fadi collaboration (Norway) + Event-level classification</p>
                        <p><strong>Final Success:</strong> 99.56% F1-score with real-world validation + IEEE Sensors manuscript ready <cite>[4]</cite></p>
                    </div>

                </div>
                
                <div style="display: flex; justify-content: space-around; margin: 30px 0;">
                    <div class="performance-metric">
                        <div class="performance-metric">Literature Foundation</div>
                        <div class="performance-metric">2,459 Papers</div>
                    </div>
                    <div class="performance-metric">
                        <div class="performance-metric">Strategic Success</div>
                        <div class="performance-metric">Sleep→Fall Detection</div>
                    </div>
                    <div class="performance-metric">
                        <div class="performance-metric">Final Performance</div>
                        <div class="performance-metric">99.56% F1-Score</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 5: Strategic Pivot Justification -->
        <div class="slide">
            <div class="slide-header">
                <h2>Strategic Pivot: Sleep Monitoring → Fall Detection</h2>
                <div class="slide-number">5/31</div>
            </div>
            <div class="slide-content">
                <div style="display: flex; justify-content: space-between; gap: 30px;">
                    <div style="flex: 1;">
                        <h3 style="color: #d32f2f;">❌ Sleep Monitoring Challenges</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">!</div>
                            <div>Multi-modal sensor complexity (EEG, EOG)</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">!</div>
                            <div>Clinical validation requirements</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">!</div>
                            <div>Regulatory compliance complexity</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">!</div>
                            <div>Limited patient access</div>
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h3 style="color: #4caf50;">✓ Fall Detection Advantages</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">✓</div>
                            <div>Leverages existing BAN expertise</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">✓</div>
                            <div>Manageable validation requirements</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">✓</div>
                            <div>Multiple application domains</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">✓</div>
                            <div>Industry partnership alignment</div>
                        </div>
                    </div>
                </div>
                
                <div class="highlight-box" style="margin-top: 30px;">
                    <h3>🎯 Strategic Decision</h3>
                    <p>Maintaining core objective of assistive solutions for frail populations while adapting technical approach to available resources and practical deployment considerations.</p>
                </div>
            </div>
        </div>

        <!-- YEAR 1 DETAILED SLIDES START HERE -->

        <!-- Slide 6: Year 1 Overview -->
        <div class="slide">
            <div class="slide-header">
                <h2>📚 Year 1 (2022-2023): Foundation & Discovery</h2>
                <div class="slide-number">6/31</div>
            </div>
            <div class="slide-content">
                <div class="year-section">
                    <h3>🎯 Year 1 Mission: Building Comprehensive Foundations</h3>
                    <p>Establish deep domain knowledge in assistive technologies while exploring initial technical approaches for neurodegenerative disease monitoring</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div style="flex: 1;">
                        <h3>📖 Systematic Literature Review</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔍</div>
                            <div><strong>PRISMA Methodology:</strong> Rigorous systematic approach</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Scope:</strong> ICT solutions for Alzheimer's Disease care</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🌐</div>
                            <div><strong>Multi-database Search:</strong> IEEE, ACM, Scopus, PubMed, WoS</div>
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h3>🔬 Technical Exploration</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🛠️</div>
                            <div><strong>BAN Enhancement:</strong> Body Area Network upgrades</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">😴</div>
                            <div><strong>Sleep Monitoring:</strong> Parkinson's patient focus</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Multi-modal Sensors:</strong> EEG, EOG integration</div>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-around; margin: 30px 0;">
                    <div class="impact-metric">
                        <div class="metric-number">2,459</div>
                        <div class="metric-label">Papers Analyzed</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">8</div>
                        <div class="metric-label">Technology Domains</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">46</div>
                        <div class="metric-label">Final Studies Selected</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">6</div>
                        <div class="metric-label">Months Intensive Work</div>
                    </div>
                </div>
                
                <div class="achievement-box">
                    <h3>🎯 Key Outcome: Research Gap Identification</h3>
                    <p><strong>Critical Finding:</strong> Most existing solutions were reactive rather than proactive, focusing on post-incident response instead of prevention—this insight directly shaped the subsequent fall detection research direction.</p>
                </div>
            </div>
        </div>

        <!-- Slide 7: PRISMA Flow Diagram -->
        <div class="slide">
            <div class="slide-header">
                <h2>📊 PRISMA Systematic Review Process</h2>
                <div class="slide-number">7/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./prisma.png" alt="PRISMA Flow Diagram" width="600" height="600">
                </div>
                <div class="figure-caption">Figure 1: PRISMA flow diagram illustrating the systematic screening process from 2,459 initial records through duplicate removal, title/abstract screening, and full-text evaluation to the final selection of 46 relevant studies <cite>[1]</cite>.</div>
                
                <div class="methodology-flow" style="margin-top: 30px;">
                    <div class="flow-step">
                        <h3>📚 Initial Search</h3>
                        <p><strong>2,459 Records</strong><br>Multi-database query<br>Jan 2015 - Mar 2023</p>
                    </div>
                    <div class="flow-step">
                        <h3>🔍 Duplicate Removal</h3>
                        <p><strong>2,180 Unique</strong><br>Automated + Manual<br>Quality screening</p>
                    </div>
                    <div class="flow-step">
                        <h3>📖 Full-Text Review</h3>
                        <p><strong>46 Selected</strong><br>Inclusion criteria<br>Quality assessment</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>🎯 Inclusion Criteria Applied</h3>
                    <div class="bullet-point">
                        <div class="bullet-icon">✓</div>
                        <div>Focus on Alzheimer's disease (title, keywords, or abstract mention)</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">✓</div>
                        <div>Published in English with full-text availability</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">✓</div>
                        <div>Original research (excluding reviews and editorials)</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">✓</div>
                        <div>ICT-based technological intervention or solution</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 8: Technology Domain Analysis -->
        <div class="slide">
            <div class="slide-header">
                <h2>🔬 Eight Technology Domains Framework</h2>
                <div class="slide-number">8/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./surveyp.png" alt="Technology Domain Distribution" width="600" height="500">
                </div>
                <div class="figure-caption">Figure 2: Overview of the systematic survey structure exploring technological innovations across eight major domains in Alzheimer's care, showing the comprehensive approach to technology categorization <cite>[1]</cite>.</div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 30px 0;">
                    <div class="highlight-box">
                        <h4>🏥 Healthcare-Focused Domains</h4>
                        <div class="bullet-point">
                            <div class="bullet-icon">📱</div>
                            <div><strong>Telemedicine & E-Health:</strong> Remote monitoring and consultation systems</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🏠</div>
                            <div><strong>Smart Environments:</strong> Ambient assisted living solutions</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🩺</div>
                            <div><strong>Internet of Medical Things:</strong> Connected medical devices</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">👤</div>
                            <div><strong>Personalized Assistive Solutions:</strong> Adaptive care systems</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box">
                        <h4>💻 Technology-Focused Domains</h4>
                        <div class="bullet-point">
                            <div class="bullet-icon">🌐</div>
                            <div><strong>Internet of Things (IoT):</strong> Connected device networks</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📡</div>
                            <div><strong>Wearable & Environmental Sensors:</strong> Multi-modal sensing</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎥</div>
                            <div><strong>Audio/Video Processing:</strong> Behavioral analysis systems</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💾</div>
                            <div><strong>Digital Platforms:</strong> Software architectures and data management</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 9: Sensing Technology Analysis -->
        <div class="slide">
            <div class="slide-header">
                <h2>📡 Sensing Technology Categorization</h2>
                <div class="slide-number">9/31</div>
            </div>
            <div class="slide-content">
                <table class="comparison-table">
                    <tr>
                        <th>Sensing Technology</th>
                        <th>Key Applications</th>
                        <th>Advantages</th>
                        <th>Limitations</th>
                        <th>Usage Frequency</th>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Inertial Sensors</strong><br><small>Accelerometers, Gyroscopes, Magnetometers</small></td>
                        <td>Activity recognition, fall detection, gait analysis</td>
                        <td>Non-invasive, wearable, continuous monitoring</td>
                        <td>Motion artifacts, calibration requirements</td>
                        <td><span style="color: #4caf50; font-weight: bold;">High (65%)</span></td>
                    </tr>
                    <tr style="background-color: #fff3e0;">
                        <td><strong>Physiological Sensors</strong><br><small>Heart rate, Blood pressure, SpO2</small></td>
                        <td>Vital signs monitoring, health status assessment</td>
                        <td>Direct health indicators, clinical relevance</td>
                        <td>Comfort issues, skin irritation, accuracy</td>
                        <td><span style="color: #ff9800; font-weight: bold;">Medium (45%)</span></td>
                    </tr>
                    <tr style="background-color: #e3f2fd;">
                        <td><strong>Environmental Sensors</strong><br><small>Pressure, Temperature, Light, GPS</small></td>
                        <td>Context awareness, location tracking, safety</td>
                        <td>Ambient monitoring, privacy-preserving</td>
                        <td>Installation complexity, coverage limitations</td>
                        <td><span style="color: #2196f3; font-weight: bold;">Medium (35%)</span></td>
                    </tr>
                    <tr style="background-color: #f3e5f5;">
                        <td><strong>Video/Audio Processing</strong><br><small>Computer vision, Speech analysis</small></td>
                        <td>Behavior analysis, emergency detection</td>
                        <td>Rich information content, visual confirmation</td>
                        <td>Privacy concerns, computational complexity</td>
                        <td><span style="color: #9c27b0; font-weight: bold;">Low (25%)</span></td>
                    </tr>
                </table>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div class="highlight-box" style="flex: 1;">
                        <h3>🎯 Key Finding: Inertial Sensor Dominance</h3>
                        <p>Accelerometer and gyroscope sensors emerged as the most promising technology for practical deployment due to their non-invasive nature and proven effectiveness in movement-related applications.</p>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>💡 Strategic Insight</h3>
                        <p>This analysis directly informed our decision to focus on inertial sensors for fall detection, leveraging the technology with highest deployment success rates and user acceptance.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 10: Key Research Gaps Identified -->
        <div class="slide">
            <div class="slide-header">
                <h2>🔍 Critical Research Gaps Discovered</h2>
                <div class="slide-number">10/31</div>
            </div>
            <div class="slide-content">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 30px 0;">
                    <div class="highlight-box">
                        <h3>🚫 Limited Real-World Deployment</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚠️</div>
                            <div><strong>Finding:</strong> 78% of solutions remained at prototype stage</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Impact:</strong> Lack of authentic deployment validation</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Opportunity:</strong> Real-world testing needed for practical solutions</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box">
                        <h3>🔄 Reactive vs. Proactive Approaches</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Current State:</strong> 85% focus on post-incident detection</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🚀</div>
                            <div><strong>Gap:</strong> Lack of preventive/predictive capabilities</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💡</div>
                            <div><strong>Innovation:</strong> Pre-impact detection potential identified</div>
                        </div>
                    </div>
                    
                    <div class="highlight-box">
                        <h3>🧩 Technology Fragmentation</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">📱</div>
                            <div><strong>Issue:</strong> Isolated solutions addressing single symptoms</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔗</div>
                            <div><strong>Need:</strong> Integrated, holistic approaches</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Solution:</strong> Comprehensive BAN-based systems</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box">
                        <h3>⚖️ Class Imbalance Challenges</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Problem:</strong> Severe imbalance in safety-critical data</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🧠</div>
                            <div><strong>Impact:</strong> ML training difficulties in fall detection</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💡</div>
                            <div><strong>Future Focus:</strong> Advanced augmentation techniques needed</div>
                        </div>
                    </div>
                </div>
                
                <div class="conclusion-highlight">
                    <h2 style="margin-bottom: 15px;">🎯 Strategic Research Direction Established</h2>
                    <p style="font-size: 1.2em;">These gap findings directly shaped our pivot toward proactive fall detection systems with real-world deployment validation—addressing the most critical unmet needs identified in the literature.</p>
                </div>
            </div>
        </div>

        <!-- Slide 11: IEEE Access Survey Publication -->
        <div class="slide">
            <div class="slide-header">
                <h2>📄 Major Publication Achievement</h2>
                <div class="slide-number">11/31</div>
            </div>
            <div class="slide-content">
                <div class="publication-card" style="margin-bottom: 30px;">
                    <h3>📚 IEEE Open Access Journal Publication</h3>
                    <p><strong>Title:</strong> "ICT-Based Solutions for Alzheimer's Disease Care: A Systematic Review" <cite>[1]</cite></p>
                    <div style="display: flex; justify-content: space-between; gap: 30px; margin: 20px 0;">
                        <div>
                            <div class="bullet-point">
                                <div class="bullet-icon">📅</div>
                                <div><strong>Published:</strong> January 19, 2024</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">🔗</div>
                                <div><strong>DOI:</strong> 10.1109/ACCESS.2024.3358348</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">🌐</div>
                                <div><strong>Access:</strong> Open Access (freely available globally)</div>
                            </div>
                        </div>
                        <div>
                            <div class="bullet-point">
                                <div class="bullet-icon">📊</div>
                                <div><strong>Scope:</strong> 2,459 papers → 46 selected studies</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">⏱️</div>
                                <div><strong>Duration:</strong> 6 months intensive analysis</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">🎯</div>
                                <div><strong>Impact:</strong> Foundation reference for assistive tech</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="figure-placeholder">
                    <img src="./survey.png" alt="IEEE Access Survey Paper" width="600" height="700">
                </div>
                <div class="figure-caption">Figure 3: The published IEEE Access survey paper representing the major first year contribution, establishing comprehensive foundations for ICT-based neurodegenerative disease care research and achieving significant academic impact <cite>[1]</cite>.</div>
                
                <div class="achievement-box">
                    <h3>🌟 Unique Survey Contributions</h3>
                    <div class="bullet-point">
                        <div class="bullet-icon">🔄</div>
                        <div><strong>Holistic Coverage:</strong> First comprehensive analysis across multiple ICT domains simultaneously</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">📐</div>
                        <div><strong>Multi-Parameter Analysis:</strong> Technology type, deployment context, validation methodology integrated</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🎯</div>
                        <div><strong>Gap Identification:</strong> Systematic evidence-based recommendations for future research priorities</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 12: Original BAN Architecture -->
        <div class="slide">
            <div class="slide-header">
                <h2>🛠️ Sleep Monitoring: Original BAN Foundation</h2>
                <div class="slide-number">12/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./7.png" alt="Original BAN Architecture" width="600" height="400">
                </div>
                <div class="figure-caption">Figure 4: The original Body Area Network architecture developed by the research group, showing sensor integration, wireless communication, and data processing capabilities that provided the foundation for proposed enhancements <cite>[3]</cite>.</div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div class="highlight-box" style="flex: 1;">
                        <h3>⚡ Existing Capabilities</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">📡</div>
                            <div><strong>Sensors:</strong> 3-axis accelerometer, gyroscope, compass</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📶</div>
                            <div><strong>Communication:</strong> Bluetooth Low Energy (BLE) transmission</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Processing:</strong> Real-time movement detection algorithms</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔋</div>
                            <div><strong>Power:</strong> Optimized for extended wearable operation</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>🎯 Sleep Monitoring Requirements</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🧠</div>
                            <div><strong>EEG Integration:</strong> Brain activity monitoring for sleep stages</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">👁️</div>
                            <div><strong>EOG Sensors:</strong> Eye movement detection for REM identification</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💪</div>
                            <div><strong>EMG Addition:</strong> Muscle activity assessment for disorders</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚕️</div>
                            <div><strong>Clinical Grade:</strong> Medical device compliance needed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 13: Enhanced BAN Architecture for Sleep -->
        <div class="slide">
            <div class="slide-header">
                <h2>🔬 Sleep Monitoring: Enhanced BAN Design</h2>
                <div class="slide-number">13/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./9.jpg" alt="Enhanced BAN Architecture" width="600" height="400">
                </div>
                <div class="figure-caption">Figure 5: The proposed enhanced Body Area Network architecture for sleep monitoring, integrating EEG, and EOG sensors with existing motion sensors for comprehensive physiological monitoring in Parkinson's patients.</div>
                
                <div class="methodology-flow" style="margin: 30px 0;">
                    <div class="flow-step">
                        <h3>📡 Multi-Modal Sensing</h3>
                        <p><strong>Physiological Integration</strong><br>EEG + EOG<br>Clinical-grade acquisition</p>
                    </div>
                    <div class="flow-step">
                        <h3>🔄 Enhanced Processing</h3>
                        <p><strong>Advanced Analytics</strong><br>Sleep stage classification<br>Disorder detection</p>
                    </div>
                    <div class="flow-step">
                        <h3>📱 Smart Aggregation</h3>
                        <p><strong>Integrated Node</strong><br>Real-time analysis<br>Reduced latency</p>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 30px 0;">
                    <div class="achievement-box">
                        <h3>✨ Proposed Enhancements</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🧠</div>
                            <div><strong>EEG Array:</strong> Multi-channel brain activity monitoring</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">👁️</div>
                            <div><strong>Dual EOG:</strong> Left/right eye movement tracking</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💪</div>
                            <div><strong>Chin EMG:</strong> Muscle tone assessment for REM sleep</div>
                        </div>
                    </div>
                    
                    <div class="highlight-box">
                        <h3>⚠️ Implementation Challenges</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔧</div>
                            <div><strong>Complexity:</strong> Multi-modal sensor fusion difficulties</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚕️</div>
                            <div><strong>Validation:</strong> Clinical testing and medical compliance</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⏰</div>
                            <div><strong>Timeline:</strong> PhD completion schedule constraints</div>
                        </div>
                    </div>
                </div>
                
                <div class="conclusion-highlight" style="background: linear-gradient(135deg, #ffebee, #fce4ec);">
                    <h2>🎯 Strategic Decision Point</h2>
                    <p>While technically fascinating, the enhanced sleep monitoring system exceeded PhD scope constraints. This realization prompted systematic evaluation of alternative approaches, leading to the successful fall detection pivot.</p>
                </div>
            </div>
        </div>

        <!-- YEAR 2 DETAILED SLIDES START HERE -->

        <!-- Slide 14: Year 2 Overview & Strategic Pivot -->
        <div class="slide">
            <div class="slide-header">
                <h2>🎯 Year 2 (2023-2024): Strategic Innovation</h2>
                <div class="slide-number">14/31</div>
            </div>
            <div class="slide-content">
                <div class="year-section">
                    <h3>🔄 Year 2 Mission: From Sleep Monitoring to Fall Detection Excellence</h3>
                    <p>Execute strategic pivot while maintaining alignment with assistive care objectives, developing breakthrough embedded AI solutions for safety applications</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div style="flex: 1;">
                        <h3>🎯 Strategic Pivot Execution</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔄</div>
                            <div><strong>Direction Change:</strong> Sleep monitoring → Fall detection</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Innovation Focus:</strong> Pre-impact detection capability</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🤝</div>
                            <div><strong>Industry Alignment:</strong> Protechto s.r.l. partnership</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Objective:</strong> Proactive safety vs. reactive detection</div>
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h3>🧠 Technical Innovation</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">💻</div>
                            <div><strong>Lightweight CNN:</strong> STM32-optimized architecture</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Real-time Processing:</strong> Sub-500ms decision latency</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Dataset Integration:</strong> KFall + Custom collection</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Embedded Deployment:</strong> Microcontroller validation</div>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-around; margin: 30px 0;">
                    <div class="impact-metric">
                        <div class="metric-number">86.69%</div>
                        <div class="metric-label">F1-Score Achieved</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">400ms</div>
                        <div class="metric-label">Decision Latency</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">61</div>
                        <div class="metric-label">Total Subjects</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-number">🏆</div>
                        <div class="metric-label">Best Paper Award</div>
                    </div>
                </div>
                
                <div class="achievement-box">
                    <h3>🎯 Year 2 Breakthrough: Pre-Impact Detection</h3>
                    <p><strong>Revolutionary Approach:</strong> First practical implementation of pre-impact fall detection on embedded microcontrollers, enabling protective device activation before ground contact occurs—transforming from reactive to proactive safety systems.</p>
                </div>
            </div>
        </div>

        <!-- Slide 15: Fall Stages Explained -->
        <div class="slide">
            <div class="slide-header">
                <h2>📊 Four Stages of Fall: Pre-Impact Innovation</h2>
                <div class="slide-number">15/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./falling-overview.png" alt="Fall Stages" width="750" height="500">
                </div>
                <div class="figure-caption">Figure 6: Abstract view of PhD work showing fall stages: Pre-fall (stable), Critical (loss of balance), Impact (ground contact), and Post-fall (recovery), with corresponding acceleration patterns highlighting the critical pre-impact detection window <cite>[2]</cite>.</div>
                
                <div class="methodology-flow" style="margin: 30px 0;">
                    <div class="flow-step" style="background: #e8f5e8;">
                        <h3>🟢 Pre-Fall Stage</h3>
                        <p><strong>Normal Activities</strong><br>Stable acceleration<br>Baseline patterns</p>
                    </div>
                    <div class="flow-step" style="background: #fff3e0;">
                        <h3>🟡 Critical Stage</h3>
                        <p><strong>Loss of Balance</strong><br>Sudden acceleration<br>⚡ Detection Window</p>
                    </div>
                    <div class="flow-step" style="background: #ffebee;">
                        <h3>🔴 Impact Stage</h3>
                        <p><strong>Ground Contact</strong><br>High impact forces<br>Traditional detection</p>
                    </div>
                    <div class="flow-step" style="background: #f3e5f5;">
                        <h3>🟣 Post-Fall</h3>
                        <p><strong>After Impact</strong><br>Recovery/stillness<br>Emergency response</p>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div class="highlight-box" style="flex: 1;">
                        <h3>🎯 Innovation: Pre-Impact Detection</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Target Window:</strong> Critical stage (300-400ms)</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🛡️</div>
                            <div><strong>Prevention Goal:</strong> Activate protection before impact</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🚀</div>
                            <div><strong>Advantage:</strong> Injury prevention vs. detection</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>⚙️ Technical Challenge</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">⏱️</div>
                            <div><strong>Time Constraint:</strong> < 500ms decision required</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Accuracy Need:</strong> Minimize false positives</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">💻</div>
                            <div><strong>Embedded Deploy:</strong> Resource-constrained systems</div>
                        </div>
                    </div>
                </div>
                
                <div class="conclusion-highlight">
                    <h2>💡 Paradigm Shift: Prevention over Detection</h2>
                    <p>Traditional fall detection systems react after impact occurs. Our pre-impact approach enables proactive protection, potentially preventing injuries rather than simply detecting them after occurrence.</p>
                </div>
            </div>
        </div>

        <!-- Slide 16: Overall Methodology Development -->
        <div class="slide">
            <div class="slide-header">
                <h2>🔬 Year 2 Methodology Framework</h2>
                <div class="slide-number">16/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./AdBAN.jpg" alt="Methodology Framework" width="750" height="400">
                </div>
                <div class="figure-caption">Figure 7: Complete methodology of pre-impact fall detection showing the integrated pipeline from data acquisition through preprocessing, CNN model training and testing, to final optimization and deployment on STM32 microcontrollers <cite>[2]</cite>.</div>
                
                <div class="methodology-flow" style="margin: 30px 0;">
                    <div class="flow-step">
                        <h3>📊 Data Acquisition</h3>
                        <p><strong>Multi-Source Collection</strong><br>KFall dataset + Custom<br>6-channel IMU data</p>
                    </div>
                    <div class="flow-step">
                        <h3>🔄 Preprocessing</h3>
                        <p><strong>Signal Optimization</strong><br>400ms windows<br>Normalization pipeline</p>
                    </div>
                    <div class="flow-step">
                        <h3>🧠 CNN Training</h3>
                        <p><strong>Lightweight Architecture</strong><br>Embedded-optimized<br>Binary classification</p>
                    </div>
                    <div class="flow-step">
                        <h3>⚡ STM32 Deploy</h3>
                        <p><strong>Real-time Operation</strong><br>67KB flash usage<br>4ms inference time</p>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 30px 0;">
                    <div class="highlight-box">
                        <h3>📡 Data Collection Strategy</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🌐</div>
                            <div><strong>KFall Integration:</strong> 32 subjects, 21 ADL + 15 fall types</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Custom Collection:</strong> 29 subjects, construction-focused scenarios</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📱</div>
                            <div><strong>Synchronization:</strong> LED-smartphone video alignment</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Sampling Rate:</strong> 100Hz for optimal motion capture</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box">
                        <h3>🧠 CNN Architecture Innovation</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">💻</div>
                            <div><strong>Input Design:</strong> [40 × 6] for 400ms IMU windows</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔧</div>
                            <div><strong>Layer Structure:</strong> Conv1D + MaxPool + Dense progression</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Optimization:</strong> Dropout regularization for overfitting prevention</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Output:</strong> Binary classification with confidence scoring</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 17: CNN Architecture Details -->
        <div class="slide">
            <div class="slide-header">
                <h2>🧠 Lightweight CNN Architecture Design</h2>
                <div class="slide-number">17/31</div>
            </div>
            <div class="slide-content">
                <div class="highlight-box">
                    <h3>⚡ STM32 Microcontroller Constraints</h3>
                    <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                        <div style="text-align: center;">
                            <div style="font-size: 2em; color: #d32f2f;">⚠️</div>
                            <div><strong>Flash Memory</strong><br>< 256KB limit</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; color: #d32f2f;">⚠️</div>
                            <div><strong>RAM Usage</strong><br>< 256KB limit</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; color: #d32f2f;">⚠️</div>
                            <div><strong>Processing Speed</strong><br>< 10ms inference</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; color: #d32f2f;">⚠️</div>
                            <div><strong>Power Consumption</strong><br>Battery operation</div>
                        </div>
                    </div>
                </div>
                
                <table class="comparison-table">
                    <tr>
                        <th>Layer Type</th>
                        <th>Configuration</th>
                        <th>Input → Output</th>
                        <th>Parameters</th>
                        <th>Purpose</th>
                    </tr>
                    <tr style="background-color: #e8f4f8;">
                        <td><strong>Input Layer</strong></td>
                        <td>[40 × 6] IMU windows</td>
                        <td>Raw sensor data</td>
                        <td>0</td>
                        <td>400ms 6-channel input</td>
                    </tr>
                    <tr style="background-color: #f3e5f5;">
                        <td><strong>Conv1D Layer 1</strong></td>
                        <td>64 filters, kernel=4</td>
                        <td>[40×6] → [27×64]</td>
                        <td>1,600</td>
                        <td>Feature extraction</td>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>MaxPool1D + Dropout</strong></td>
                        <td>Pool=2, dropout=0.1</td>
                        <td>[27×64] → [13×64]</td>
                        <td>0</td>
                        <td>Dimensionality reduction</td>
                    </tr>
                    <tr style="background-color: #fff3e0;">
                        <td><strong>Conv1D Layer 2</strong></td>
                        <td>64 filters, kernel=4</td>
                        <td>[13×64] → [10×64]</td>
                        <td>16,384</td>
                        <td>Higher-level features</td>
                    </tr>
                    <tr style="background-color: #e3f2fd;">
                        <td><strong>MaxPool1D + Dropout</strong></td>
                        <td>Pool=2, dropout=0.4</td>
                        <td>[10×64] → [5×64]</td>
                        <td>0</td>
                        <td>Final dimension reduction</td>
                    </tr>
                    <tr style="background-color: #f3e5f5;">
                        <td><strong>Dense Layer</strong></td>
                        <td>320→128 with PReLU</td>
                        <td>[320] → [128]</td>
                        <td>41,088</td>
                        <td>Classification preparation</td>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Output Layer</strong></td>
                        <td>128→2 with Softmax</td>
                        <td>[128] → [2]</td>
                        <td>258</td>
                        <td>Binary fall/activity</td>
                    </tr>
                </table>
                
                <div style="display: flex; justify-content: space-around; margin: 30px 0;">
                    <div class="performance-metric" style="background: linear-gradient(135deg, #4caf50, #2e7d32);">67.03 KB Flash</div>
                    <div class="performance-metric" style="background: linear-gradient(135deg, #2196f3, #1565c0);">16.87 KB RAM</div>
                    <div class="performance-metric" style="background: linear-gradient(135deg, #ff9800, #f57c00);">4ms ± 3ms Inference</div>
                    <div class="performance-metric" style="background: linear-gradient(135deg, #9c27b0, #6a1b9a);">59,330 Total Params</div>
                </div>
            </div>
        </div>

        <!-- Slide 18: Year 2 Results & Performance -->
        <div class="slide">
            <div class="slide-header">
                <h2>📊 Year 2 Performance Results</h2>
                <div class="slide-number">18/31</div>
            </div>
            <div class="slide-content">
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div style="flex: 1;">
                        <h3>🎯 Classification Performance</h3>
                        <div class="impact-metric">
                            <div class="metric-number">86.69%</div>
                            <div class="metric-label">F1-Score Achievement</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">✅</div>
                            <div><strong>Overall Accuracy:</strong> 98.28%</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚠️</div>
                            <div><strong>False Positive Rate:</strong> 2.04%</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">❌</div>
                            <div><strong>False Negative Rate:</strong> 4.17%</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Validation Method:</strong> Subject-independent cross-validation</div>
                        </div>
                    </div>
                    
                    <div style="flex: 1;">
                        <h3>⚡ Real-Time Performance</h3>
                        <div class="impact-metric">
                            <div class="metric-number">400ms</div>
                            <div class="metric-label">Decision Latency</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🚀</div>
                            <div><strong>Processing Window:</strong> 400ms segments</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>CNN Inference:</strong> 4ms ± 3ms per segment</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🛡️</div>
                            <div><strong>Protection Window:</strong> 150ms for airbag activation</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔋</div>
                            <div><strong>Power Efficiency:</strong> Extended battery operation</div>
                        </div>
                    </div>
                </div>
                
                <table class="comparison-table">
                    <tr>
                        <th>Metric Category</th>
                        <th>Year 2 Achievement</th>
                        <th>Industry Standard</th>
                        <th>Status</th>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>F1-Score</strong></td>
                        <td>86.69%</td>
                        <td>80-85% typical</td>
                        <td><span style="color: #4caf50; font-weight: bold;">✓ Exceeds</span></td>
                    </tr>
                    <tr style="background-color: #e3f2fd;">
                        <td><strong>Response Time</strong></td>
                        <td>400ms total latency</td>
                        <td>500-1000ms typical</td>
                        <td><span style="color: #4caf50; font-weight: bold;">✓ Superior</span></td>
                    </tr>
                    <tr style="background-color: #fff3e0;">
                        <td><strong>Embedded Deployment</strong></td>
                        <td>STM32 successful</td>
                        <td>Limited demonstrations</td>
                        <td><span style="color: #4caf50; font-weight: bold;">✓ First Practical</span></td>
                    </tr>
                    <tr style="background-color: #f3e5f5;">
                        <td><strong>Resource Usage</strong></td>
                        <td>67KB flash, 17KB RAM</td>
                        <td>High resource requirements</td>
                        <td><span style="color: #4caf50; font-weight: bold;">✓ Optimized</span></td>
                    </tr>
                </table>
                
                <div class="achievement-box">
                    <h3>🎯 Year 2 Proof-of-Concept Success</h3>
                    <p><strong>Foundation Established:</strong> 86.69% F1-score with 400ms latency proved the feasibility of pre-impact fall detection on embedded systems, setting the stage for advanced improvements in Year 3.</p>
                </div>
            </div>
        </div>

        <!-- Slide 19: DATE 2025 Best Paper Award -->
        <div class="slide">
            <div class="slide-header">
                <h2>🏆 DATE 2025 Best Paper Award Achievement</h2>
                <div class="slide-number">19/31</div>
            </div>
            <div class="slide-content">
                <div class="publication-card" style="background: linear-gradient(135deg, #fff3e0, #fffde7);">
                    <div class="award-badge" style="font-size: 1.2em; margin-bottom: 20px;">🏆 DATE 2025 Best Paper Award Winner</div>
                    <h3>📄 "A Lightweight CNN for Real-Time Pre-Impact Fall Detection" <cite>[2]</cite></h3>
                    <p><strong>Authors:</strong> Cristian Turetta, Muhammad Toqeer Ali, Florenc Demrozi, Graziano Pravadelli</p>
                    <p><strong>Conference:</strong> Design, Automation and Test in Europe (DATE) 2025</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
                    <div class="highlight-box" style="flex: 1;">
                        <h3>🌟 Award Recognition Criteria</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">💡</div>
                            <div><strong>Technical Innovation:</strong> First practical pre-impact detection on microcontrollers</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div><strong>Practical Impact:</strong> Real-world embedded deployment demonstration</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔬</div>
                            <div><strong>Methodological Excellence:</strong> Rigorous validation and performance benchmarking</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🚀</div>
                            <div><strong>Deployment Feasibility:</strong> Complete STM32 implementation proof</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>🎯 Distinguishing Innovations</h3>
                        <div class="bullet-point">
                            <div class="bullet-icon">🧠</div>
                            <div><strong>Lightweight Architecture:</strong> 67KB flash, 17KB RAM optimization</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⚡</div>
                            <div><strong>Real-Time Performance:</strong> 4ms inference, 400ms total latency</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div><strong>Comprehensive Dataset:</strong> KFall + custom construction scenarios</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🤝</div>
                            <div><strong>Industry Integration:</strong> Protechto safety equipment compatibility</div>
                        </div>
                    </div>
                </div>
                
                <div class="conclusion-highlight">
                    <h2>🏆 International Recognition Achievement</h2>
                    <p>The DATE 2025 Best Paper Award validated our innovative approach to embedded AI for safety applications, establishing credibility and visibility within the global research community while proving the practical viability of pre-impact fall detection systems.</p>
                </div>
            </div>
        </div>


<!-- New Slide: Year 2 Real-World Challenge Discovery -->
<div class="slide">
    <div class="slide-header">
        <h2>🚧 Year 2→3 Transition: Real-World Challenge Discovery</h2>
        <div class="slide-number">20/31</div>
    </div>
    <div class="slide-content">
        <div class="highlight-box" style="background-color: #fff3e0; border-left: 4px solid #ff9800;">
            <h3>⚠️ Critical Issue Discovered During Field Testing</h3>
            <p><strong>Problem:</strong> 86.69% F1-score worked well in controlled settings, but real construction site deployment revealed significant false alarms from sudden movements and jerky motions typical in construction work.</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
            <div style="flex: 1;">
                <h3 style="color: #d32f2f;">❌ Year 2 Field Testing Issues</h3>
                <div class="bullet-point">
                    <div class="bullet-icon">!</div>
                    <div>False alarms from sudden jerky movements</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">!</div>
                    <div>Construction-specific activities misclassified</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">!</div>
                    <div>Worker feedback: too many false positives</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">!</div>
                    <div>Gap between lab performance vs. field reality</div>
                </div>
            </div>
            
            <div style="flex: 1;">
                <h3 style="color: #2c5aa0;">🎯 Year 3 Solution Strategy</h3>
                <div class="bullet-point">
                    <div class="bullet-icon">✓</div>
                    <div>Collect new construction site dataset</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">✓</div>
                    <div>Add problematic activities in controlled environment</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">✓</div>
                    <div>Collaborate with Prof. Fadi (Norway) for augmentation</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">✓</div>
                    <div>Develop event-level classification methods</div>
                </div>
            </div>
        </div>
        
        <div class="achievement-box">
            <h3>🔄 Research Pivot Justification</h3>
            <p><strong>Learning:</strong> Real-world deployment is the ultimate test. Lab success doesn't guarantee field success. The false alarm issue became our Year 3 research focus, leading to breakthrough improvements and authentic commercial viability.</p>
        </div>
    </div>
</div>

        <!-- Slide 14: Year 3 Visual - Advanced Pipeline -->
        <div class="slide">
            <div class="slide-header">
                <h2>Advanced Fall Detection Pipeline</h2>
                <div class="slide-number">21/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./FallingPaperDateAssets-2-new.png" alt="Advanced Fall Detection Pipeline" width="750" height="400">
                </div>
                <div class="figure-caption">Figure 8: Complete advanced fall detection pipeline illustrating fall stages with acceleration profiles, the integrated methodology from segment-level CNN through VAE/GAN augmentation to event-level Random Forest classification, culminating in smart safety jacket deployment for protective device activation <cite>[4]</cite>.</div>
                
                <div class="methodology-flow" style="margin-top: 20px;">
                    <div class="flow-step">
                        <h3>📊 Data Input</h3>
                        <p>300ms Windows<br>6-channel IMU<br>100Hz sampling</p>
                    </div>
                    <div class="flow-step">
                        <h3>🧠 CNN Analysis</h3>
                        <p>Segment-Level<br>Lightweight arch<br>Confidence output</p>
                    </div>
                    <div class="flow-step">
                        <h3>🌳 RF Aggregation</h3>
                        <p>Event-Level<br>Random Forest<br>Final decision</p>
                    </div>
                    <div class="flow-step">
                        <h3>⚡ Response</h3>
                        <p>450ms Total<br>Safety activation<br>Protection deploy</p>
                    </div>
                </div>
            </div>
        </div>

         <!-- Slide 1: Year 3 Updated Methodology Pipeline -->
        <div class="slide active">
            <div class="slide-header">
                <h2>🔬 Year 3: Updated Methodology Pipeline</h2>
                <div class="slide-number">22/31</div>
            </div>
            <div class="slide-content">
                <div class="figure-placeholder">
                    <img src="./methodology.png" alt="Advanced Fall Detection Pipeline" width="750" height="400">
                </div>
                <div class="figure-caption">Figure 9:
                    Advanced methodology pipeline showing: Data Acquisition (STM32 + 6-channel IMU) → Data Preprocessing (Low-pass filter, segmentation) → Model Training with Data Augmentation (VAE, GAN, VAE-GAN) → AI Model Training (CNN + Event-Level Random Forest) → Model Optimization (Quantization) → Deployment on STM32/Smart Safety Jacket
                </div>
                
                <div class="methodology-flow">
                    <div class="flow-step">
                        <h4>📊 Data Acquisition</h4>
                        <p>STM32F722RE<br>6-channel IMU<br>100Hz sampling<br>Multi-environment</p>
                    </div>
                    <div class="flow-step">
                        <h4>🔄 Data Preprocessing</h4>
                        <p>Low-pass filter 5Hz<br>300ms windows<br>50% overlap<br>Normalization</p>
                    </div>
                    <div class="flow-step">
                        <h4>🎯 Data Augmentation</h4>
                        <p>VAE Generation<br>GAN Synthesis<br>VAE-GAN Hybrid<br>Quality Control</p>
                    </div>
                    <div class="flow-step">
                        <h4>🧠 AI Model Training</h4>
                        <p>Segment-CNN<br>Event-RF<br>5-fold CV<br>Subject-independent</p>
                    </div>
                    <div class="flow-step">
                        <h4>⚡ Model Optimization</h4>
                        <p>Quantization<br>STM32 Deploy<br>Real-time<br>Safety Jacket</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>🔄 Key Methodology Enhancements from Year 2</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                        <div>
                            <h4>📈 Dataset Expansion</h4>
                            <div class="bullet-point">
                                <div class="bullet-icon">🏗️</div>
                                <div><strong>Construction Site Data:</strong> Real-world occupational activities</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">📊</div>
                                <div><strong>Extended Collection:</strong> 480+ hours authentic data</div>
                            </div>
                        </div>
                        <div>
                            <h4>🎯 Advanced Processing</h4>
                            <div class="bullet-point">
                                <div class="bullet-icon">🧬</div>
                                <div><strong>Generative Augmentation:</strong> VAE/GAN for class balance</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">🌳</div>
                                <div><strong>Event-Level Intelligence:</strong> Random Forest aggregation</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="year-section">
                    <h3>🎯 Pipeline Innovation Impact</h3>
                    <p>The updated methodology addresses <strong>class imbalance (131:1 ratio)</strong> through targeted augmentation and replaces simple threshold-based aggregation with <strong>intelligent Random Forest event-level classification</strong>, achieving breakthrough 99.56% F1-score performance.</p>
                </div>
            </div>
        </div>


        <!-- Slide 2: Dataset Class Imbalance & Augmentation Strategy -->
        <div class="slide">
            <div class="slide-header">
                <h2>⚖️ Dataset Class Imbalance Challenge & Augmentation Strategy</h2>
                <div class="slide-number">23/31</div>
            </div>
            <div class="slide-content">
                <div style="display: flex; gap: 30px; margin: 30px 0;">
                    <div style="flex: 1;">
                        <div class="figure-placeholder">
                            <img src="./overall_class_count.png" alt="Advanced Fall Detection Pipeline" width="750" height="400">
                        </div>
                        <div class="figure-caption">Figure 10:
                            Class distribution showing extreme imbalance: 99.24% activity vs. 0.76% falling segments, highlighting the critical need for targeted augmentation approaches.
                        </div>
                        
                        <div class="performance-metric" style="background: #ffebee; border-color: #f44336;">
                            <div class="metric-number" style="color: #f44336;">131:1</div>
                            <div class="metric-label">Activity to Fall Ratio</div>
                        </div>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>🧬 Advanced Augmentation Strategy Implementation</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                        <div style="background: #e3f2fd; border: 2px solid #1976d2; border-radius: 10px; padding: 15px;">
                            <h4 style="color: #1976d2; margin-bottom: 10px;">🧠 VAE Approach</h4>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #1976d2;">✓</div>
                                <div><strong>Probabilistic:</strong> Latent space learning</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #1976d2;">🔧</div>
                                <div><strong>Quality Control:</strong> Reconstruction error filtering</div>
                            </div>
                            <p style="margin: 10px 0; font-size: 0.9em;"><strong>Result:</strong> 99.49% F1-score</p>
                        </div>
                        
                        <div style="background: #e8f5e8; border: 2px solid #388e3c; border-radius: 10px; padding: 15px;">
                            <h4 style="color: #388e3c; margin-bottom: 10px;">⚡ GAN/TimeGAN</h4>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #388e3c;">🎭</div>
                                <div><strong>Adversarial:</strong> Temporal pattern synthesis</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #388e3c;">⏱️</div>
                                <div><strong>Temporal Coherence:</strong> Realistic dynamics</div>
                            </div>
                            <p style="margin: 10px 0; font-size: 0.9em;"><strong>Result:</strong> 99.43% F1-score</p>
                        </div>
                        
                        <div style="background: #fff3e0; border: 2px solid #f57c00; border-radius: 10px; padding: 15px;">
                            <h4 style="color: #f57c00; margin-bottom: 10px;">🔄 VAE-GAN Hybrid</h4>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #f57c00;">🤝</div>
                                <div><strong>Combined:</strong> Best of both approaches</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; padding: 5px 0; border: none;">
                                <div class="bullet-icon" style="background: #f57c00;">📏</div>
                                <div><strong>Controlled:</strong> Equal synthetic mixing</div>
                            </div>
                            <p style="margin: 10px 0; font-size: 0.9em;"><strong>Result:</strong> 99.49% F1-score</p>
                        </div>
                    </div>
                </div>
                
                <div class="year-section">
                    <h3>💡 Key Insight: Controlled Quality over Quantity</h3>
                    <p>All three augmentation strategies achieved statistically indistinguishable performance (~99.5% F1-score). The success demonstrates that <strong>controlled, high-quality synthetic data generation with volume restrictions (1×-2× multipliers)</strong> is more critical than the specific generative modeling approach used.</p>
                </div>
            </div>
        </div>

<div class="slide">
    <div class="slide-header">
        <h2>🏗️ Dataset Collection & Validation</h2>
        <div class="slide-number">24/31</div>
    </div>
    <div class="slide-content">
        <div class="figure-placeholder">
            <img src="./Dataset_collection.png" alt="Construction Site Data Collection" width="750" height="400">
        </div>
        <div class="figure-caption">Figure 9: Participants engaged in various activities during the self-collected dataset acquisition sessions in controlled settings.</div>
        
        <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
            <div style="flex: 1;">
                <h3>🎯 Problem-Focused Collection</h3>
                <div class="bullet-point">
                    <div class="bullet-icon">⚠️</div>
                    <div><strong>Target Activities:</strong> Jerky movements causing Year 2 false alarms</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">🔧</div>
                    <div><strong>Enhanced Hardware:</strong> Improved PCB design based on field feedback</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">📱</div>
                    <div><strong>Mobile Control:</strong> Autonomous operation without cables</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">🔋</div>
                    <div><strong>Extended Battery:</strong> Full shift operation capability</div>
                </div>
            </div>
                    <div style="flex: 1;">
                        <h3>📈 Collection Results</h3>
                        <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                            <div class="impact-metric">
                                <div class="metric-number">480+</div>
                                <div class="metric-label">Hours Authentic Data</div>
                            </div>
                            <div class="impact-metric">
                                <div class="metric-number">29+</div>
                                <div class="metric-label">Total Participants</div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                            <div class="impact-metric">
                                <div class="metric-number">44</div>
                                <div class="metric-label">Total Activity Types</div>
                            </div>
                            <div class="impact-metric">
                                <div class="metric-number">36</div>
                                <div class="metric-label">Fall Types Combined</div>
                            </div>
                        </div>
                    </div>
        </div>
                <div class="achievement-box" style="margin-top: 30px;">
                    <h3>💼 Year 3 Dataset Enhancement Impact</h3>
                    <p><strong>Problem-Driven Collection:</strong> Extended construction-site recordings captured natural stumbles, slips, and near-falls occurring spontaneously, providing realistic borderline cases that addressed Year 2 false alarm issues. Combined with KFall dataset, this created comprehensive coverage spanning 61 total subjects with authentic occupational movement patterns.</p>
                </div>
    </div>
</div>

            <!-- Slide 3: From Threshold-Based to Random Forest Intelligence -->
            <div class="slide">
                <div class="slide-header">
                    <h2>🌳 From Threshold-Based to Random Forest Intelligence</h2>
                    <div class="slide-number">25/31</div>
                </div>
                <div class="slide-content">
                    <div class="problem-solution-grid">
                        <div class="problem-box">
                            <h4>⚠️ Threshold-Based Limitations</h4>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #f44336;">❌</div>
                                <div><strong>Rigid Rule:</strong> Simple M=2 consecutive segments</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #f44336;">🚫</div>
                                <div><strong>Complex Movements:</strong> Cannot handle borderline cases</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #f44336;">⚡</div>
                                <div><strong>False Alarms:</strong> High rate during construction work</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #f44336;">🎯</div>
                                <div><strong>Static Approach:</strong> No learning from patterns</div>
                            </div>
                            
                            <div class="figure-placeholder" style="background: #ffebee; border-color: #f44336; margin: 15px 0; padding: 15px;">
                                <strong>Algorithm 1: Option A (Threshold)</strong><br>
                                if c ≥ 1 then Event ← Fall<br>
                                else Event ← Activity
                            </div>
                        </div>
                        
                        <div class="solution-box">
                            <h4>✅ Random Forest Advantages</h4>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #4caf50;">🧠</div>
                                <div><strong>Supervised Learning:</strong> Learns from training data</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #4caf50;">📊</div>
                                <div><strong>Confidence Dynamics:</strong> Uses CNN probability patterns</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #4caf50;">🎯</div>
                                <div><strong>Robust Decisions:</strong> Handles complex motion patterns</div>
                            </div>
                            <div class="bullet-point" style="background: transparent; border: none; padding: 5px 0;">
                                <div class="bullet-icon" style="background: #4caf50;">⚡</div>
                                <div><strong>Fast Inference:</strong> Negligible computational overhead</div>
                            </div>
                            
                            <div class="figure-placeholder" style="background: #e8f5e8; border-color: #4caf50; margin: 15px 0; padding: 15px;">
                                <strong>Algorithm 1: Option B (Random Forest)</strong><br>
                                6D feature vector from M=2 segments<br>
                                Ensemble decision with majority voting
                            </div>
                        </div>
                    </div>
                    
                    <h3>📈 Performance Comparison Results</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Approach</th>
                                <th>Falling F1-Score</th>
                                <th>Activity F1-Score</th>
                                <th>Overall Accuracy</th>
                                <th>Decision Complexity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="threshold-bad">
                                <td><strong>Threshold-Based (M=2)</strong></td>
                                <td>95.2%</td>
                                <td>97.8%</td>
                                <td>96.5%</td>
                                <td>Static Rule</td>
                            </tr>
                            <tr class="rf-good">
                                <td><strong>Random Forest (M=2)</strong></td>
                                <td><strong>99.57%</strong></td>
                                <td><strong>99.63%</strong></td>
                                <td><strong>99.85%</strong></td>
                                <td>Learned Patterns</td>
                            </tr>
                            <tr>
                                <td><strong>Improvement</strong></td>
                                <td><strong>+4.37%</strong></td>
                                <td><strong>+1.83%</strong></td>
                                <td><strong>+3.35%</strong></td>
                                <td>Intelligent Decision</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="highlight-box">
                        <h3>🔍 Why Random Forest Works for Fall Detection</h3>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                            <div>
                                <h4>📊 Technical Advantages</h4>
                                <div class="bullet-point">
                                    <div class="bullet-icon">🎯</div>
                                    <div><strong>Pattern Recognition:</strong> Learns confidence dynamics from CNN outputs</div>
                                </div>
                                <div class="bullet-point">
                                    <div class="bullet-icon">🌳</div>
                                    <div><strong>Ensemble Robustness:</strong> Multiple decision trees reduce overfitting</div>
                                </div>
                                <div class="bullet-point">
                                    <div class="bullet-icon">⚡</div>
                                    <div><strong>Real-time Ready:</strong> Fast inference suitable for embedded systems</div>
                                </div>
                            </div>
                            <div>
                                <h4>🏗️ Real-world Impact</h4>
                                <div class="bullet-point">
                                    <div class="bullet-icon">🛡️</div>
                                    <div><strong>False Alarm Reduction:</strong> Better discrimination of complex work movements</div>
                                </div>
                                <div class="bullet-point">
                                    <div class="bullet-icon">🎯</div>
                                    <div><strong>Borderline Cases:</strong> Intelligent handling of ambiguous situations</div>
                                </div>
                                <div class="bullet-point">
                                    <div class="bullet-icon">⏱️</div>
                                    <div><strong>Temporal Intelligence:</strong> Considers short-term prediction sequences</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="year-section">
                        <h3>🎯 Event-Level Classification Revolution</h3>
                        <p>Replacing threshold-based aggregation with Random Forest classification represents a <strong>paradigm shift from rule-based to learning-based event detection</strong>. This innovation enables the system to achieve 99.5%+ F1-scores while maintaining real-time performance constraints essential for pre-impact safety device activation.</p>
                    </div>
                </div>
            </div>
        <!-- Slide 17: Performance Benchmarking -->
        <div class="slide">
            <div class="slide-header">
                <h2>Performance Benchmarking & Comparison</h2>
                <div class="slide-number">26/31</div>
            </div>
            <div class="slide-content">
                <div class="highlight-box">
                    <h3>🏆 State-of-the-Art Achievement</h3>
                    <p>Our approach establishes new performance benchmarks while maintaining embedded deployment feasibility <cite>[4]</cite></p>
                </div>
                
                <table class="comparison-table">
                    <tr>
                        <th>Achievement Category</th>
                        <th>Previous Best</th>
                        <th>This Work</th>
                        <th>Improvement</th>
                        <th>Significance</th>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Detection Accuracy</strong></td>
                        <td>98.79% F1-score</td>
                        <td><strong>99.56% F1-score</strong></td>
                        <td>+0.77%</td>
                        <td>New SOTA performance</td>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Response Time</strong></td>
                        <td>500-1000ms typical</td>
                        <td><strong>450ms ± 5ms</strong></td>
                        <td>-50ms+</td>
                        <td>Fastest protective response</td>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Embedded Deploy</strong></td>
                        <td>Limited demos</td>
                        <td><strong>Complete STM32</strong></td>
                        <td>100%</td>
                        <td>First comprehensive solution</td>
                    </tr>
                    <tr style="background-color: #e8f5e8;">
                        <td><strong>Real-World Testing</strong></td>
                        <td>Laboratory only</td>
                        <td><strong>Construction sites</strong></td>
                        <td>New domain</td>
                        <td>First authentic validation</td>
                    </tr>
                </table>
                
                <div style="display: flex; justify-content: space-between; margin: 30px 0;">
                    <div class="achievement-box" style="flex: 1; margin: 10px;">
                        <h3>📊 Year-over-Year Progress</h3>
                        <div style="text-align: center;">
                            <div style="font-size: 1.5em; color: #2c5aa0;">86.69% → 99.56%</div>
                            <div style="color: #4caf50; font-weight: bold;">+12.87% improvement</div>
                        </div>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1; margin: 10px;">
                        <h3>⚡ Consistent Performance</h3>
                        <div style="text-align: center;">
                            <div style="font-size: 1.5em; color: #2c5aa0;">< 1% std dev</div>
                            <div style="color: #4caf50; font-weight: bold;">Robust generalization</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 20: Year 3 Overview & Breakthrough -->
<div class="slide">
    <div class="slide-header">
        <h2>🚀 Year 3 (2024-2025): Breakthrough Performance</h2>
        <div class="slide-number">27/31</div>
    </div>
    <div class="slide-content">
        <div class="year-section">
            <h3>🔧 Year 3 Mission: From Field Problems to Breakthrough Solutions</h3>
            <p>Address real-world false alarm issues discovered during Year 2 field testing through systematic dataset enhancement, international collaboration, and advanced methodological innovations</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; gap: 30px; margin: 30px 0;">
            <div style="flex: 1;">
                <h3>🚧 Problem-Driven Research</h3>
                <div class="bullet-point">
                    <div class="bullet-icon">📊</div>
                    <div><strong>New Dataset Collection:</strong> Construction site + controlled environment</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">🤝</div>
                    <div><strong>Prof. Fadi Collaboration:</strong> Norway expertise in data augmentation</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">🎯</div>
                    <div><strong>Advanced Augmentation:</strong> VAE, GAN, and hybrid approaches</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">⚡</div>
                    <div><strong>Event-Level Methods:</strong> Threshold-based vs. Random Forest</div>
                </div>
            </div>
            
            <div style="flex: 1;">
                <h3>🏆 Breakthrough Results</h3>
                <div class="impact-metric">
                    <div class="metric-number">99.56%</div>
                    <div class="metric-label">F1-Score Achievement</div>
                </div>
                <div style="text-align: center; margin: 15px 0;">
                    <div style="color: #4caf50; font-size: 1.8em; font-weight: bold;">+12.87% Improvement</div>
                    <div style="color: #666; font-size: 1.1em;">False alarms: 2.04% → 0.06%</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">📄</div>
                    <div><strong>IEEE Sensors Manuscript:</strong> Ready for submission</div>
                </div>
                <div class="bullet-point">
                    <div class="bullet-icon">💻</div>
                    <div><strong>STM32 Implementation:</strong> 450ms decision latency</div>
                </div>
            </div>
        </div>
        
        <div style="display: flex; justify-content: space-around; margin: 30px 0;">
            <div class="performance-metric" style="background: linear-gradient(135deg, #4caf50, #2e7d32);">
                <div>Solution: 99.56% F1-Score</div>
            </div>
            <div class="performance-metric" style="background: linear-gradient(135deg, #2196f3, #1565c0);">
                <div>Method: Event-Level Classification</div>
            </div>
            <div class="performance-metric" style="background: linear-gradient(135deg, #9c27b0, #6a1b9a);">
                <div>Data: 480+ Hours Real-World</div>
            </div>
            <div class="performance-metric" style="background: linear-gradient(135deg, #ff9800, #f57c00);">
                <div>Output: IEEE Sensors Ready</div>
            </div>
        </div>
        
        <div class="achievement-box">
            <h3>🎯 Year 3 Revolutionary Advancement</h3>
            <p><strong>Problem-to-Solution Journey:</strong> Real-world false alarm issues drove systematic improvements through enhanced datasets, Prof. Fadi's augmentation expertise, event-level classification innovation, and comprehensive validation. Result: deployment-ready technology with 99.56% accuracy and IEEE Sensors manuscript completion.</p>
        </div>
    </div>
</div>
        <!-- Slide 18: International Collaboration -->
        <div class="slide">
            <div class="slide-header">
                <h2>International Collaboration Network</h2>
                <div class="slide-number">28/31</div>
            </div>
            <div class="slide-content">
                <div style="display: flex; justify-content: space-between; gap: 30px; margin-bottom: 30px;">
                    <div class="publication-card" style="flex: 1;">
                        <h3>🇳🇴 University of Stavanger</h3>
                        <p><strong>Dr. Florenc Demrozi</strong> <cite>[5]</cite></p>
                        <div class="bullet-point">
                            <div class="bullet-icon">🔬</div>
                            <div>Biomedical Engineering expertise</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">📊</div>
                            <div>Sensor application specialization</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🤝</div>
                            <div>Joint methodology development</div>
                        </div>
                    </div>
                    
                    <div class="publication-card" style="flex: 1;">
                        <h3>🇳🇴 Norwegian Univ. Life Sciences</h3>
                        <p><strong>Dr. Fadi Al Machot</strong> <cite>[6]</cite></p>
                        <div class="bullet-point">
                            <div class="bullet-icon">🧠</div>
                            <div>Advanced Machine Learning</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">🎯</div>
                            <div>Generative modeling expertise</div>
                        </div>
                        <div class="bullet-point">
                            <div class="bullet-icon">⏱️</div>
                            <div>Time-series classification</div>
                        </div>
                    </div>
                </div>
                
                <div class="achievement-box">
                    <h3>🌍 Global Impact Network</h3>
                    <p><strong>Multi-country expertise</strong> enabled breakthrough performance improvements and established foundations for continued international research collaboration beyond PhD completion.</p>
                </div>
            </div>
        </div>

        <!-- Slide 19: Publications and Recognition -->
        <div class="slide">
            <div class="slide-header">
                <h2>Publications and Academic Recognition</h2>
                <div class="slide-number">29/31</div>
            </div>
            <div class="slide-content">
                <div class="publication-card">
                    <h3>📚 Survey Publication - IEEE Access (2024)</h3>
                    <p><strong>"ICT-Based Solutions for Alzheimer's Disease Care: A Systematic Review" <cite>[1]</cite></strong></p>
                    <div class="bullet-point">
                        <div class="bullet-icon">📊</div>
                        <div><strong>Scope:</strong> Analyzed 2,459 papers across 8 technology domains</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🌟</div>
                        <div><strong>Impact:</strong> Comprehensive foundation for assistive technology research</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🔗</div>
                        <div><strong>Citation:</strong> DOI: 10.1109/ACCESS.2024.3358348</div>
                    </div>
                </div>
                
                <div class="publication-card">
                    <div class="award-badge">🏆 DATE 2025 Best Paper Award</div>
                    <h3>🎯 Conference Publication - DATE 2025</h3>
                    <p><strong>"A Lightweight CNN for Real-Time Pre-Impact Fall Detection" <cite>[2]</cite></strong></p>
                    <div class="bullet-point">
                        <div class="bullet-icon">⚡</div>
                        <div><strong>Achievement:</strong> 86.69% F1-score with STM32 embedded deployment</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🏅</div>
                        <div><strong>Recognition:</strong> Technical excellence and practical impact</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">💡</div>
                        <div><strong>Innovation:</strong> First practical pre-impact detection on microcontrollers</div>
                    </div>
                </div>
                
                <div class="publication-card">
                    <h3>📖 Journal Submission - IEEE Sensors (manuscript ready)</h3>
                    <p><strong>"A Lightweight CNN for Real-Time Pre-Impact Fall Detection (Extended Version)" <cite>[4]</cite></strong></p>
                    <div class="bullet-point">
                        <div class="bullet-icon">🚀</div>
                        <div><strong>Breakthrough:</strong> 99.56% F1-score through event-level classification</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🏗️</div>
                        <div><strong>Validation:</strong> Comprehensive construction site deployment results</div>
                    </div>
                    <div class="bullet-point">
                        <div class="bullet-icon">🤝</div>
                        <div><strong>Collaboration:</strong> International co-authors from Norway</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 20: Conclusion -->
        <div class="slide">
            <div class="slide-header">
                <h2>Conclusion</h2>
                <div class="slide-number">30/31</div>
            </div>
            <div class="slide-content conclusion-slide">
                <div class="conclusion-highlight">
                    <h1 style="font-size: 2.5em; margin-bottom: 20px;">Mission Accomplished</h1>
                    <p style="font-size: 1.3em; line-height: 1.6;">From initial ambitious goals through strategic adaptation to significant breakthroughs in pre-impact fall detection systems</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; gap: 30px; margin: 40px 0;">
                    <div class="achievement-box" style="flex: 1;">
                        <h3>🎯 Original Objectives</h3>
                        <div style="text-align: center; font-size: 3em; color: #4caf50;">✓</div>
                        <p><strong>ACHIEVED:</strong> Assistive solutions for frail populations with IoT-based monitoring systems</p>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>📈 Performance Targets</h3>
                        <div style="text-align: center; font-size: 3em; color: #4caf50;">✓</div>
                        <p><strong>EXCEEDED:</strong> 99.56% F1-score surpasses 90% original goal</p>
                    </div>
                    
                    <div class="achievement-box" style="flex: 1;">
                        <h3>🏭 Practical Impact</h3>
                        <div style="text-align: center; font-size: 3em; color: #4caf50;">✓</div>
                        <p><strong>DEMONSTRATED:</strong> Real-world deployment with commercial viability</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>🏆 Key Success Factors</h3>
                    <div style="display: flex; justify-content: space-between; gap: 20px;">
                        <div style="flex: 1;">
                            <div class="bullet-point">
                                <div class="bullet-icon">🔄</div>
                                <div><strong>Strategic Adaptability:</strong> Flexible approach while maintaining core objectives</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">💡</div>
                                <div><strong>Technical Innovation:</strong> Novel event-level classification methodology</div>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <div class="bullet-point">
                                <div class="bullet-icon">🤝</div>
                                <div><strong>Collaborative Approach:</strong> International partnerships and industry engagement</div>
                            </div>
                            <div class="bullet-point">
                                <div class="bullet-icon">🎨</div>
                                <div><strong>Persistent Excellence:</strong> Continuous refinement and validation</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin: 40px 0;">
                    <h2 style="color: #2c5aa0; font-size: 2em;">Thank You</h2>
                    <p style="font-size: 1.2em; color: #666; margin-top: 20px;">
                        <strong>Questions and Discussion</strong><br>
                        Muhammad Toqeer Ali | PhD in Computer Science<br>
                        Università di Verona | September 2025
                    </p>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
                    <div class="performance-metric">Assistive Technology Innovation</div>
                    <div class="performance-metric">Real-World Impact</div>
                    <div class="performance-metric">Future Ready Solutions</div>
                </div>
            </div>
        </div>

<!-- References Slide -->
<div class="slide">
    <div class="slide-header">
        <h2>References</h2>
        <div class="slide-number">31/31</div>
    </div>
    <div class="slide-content">
        <div style="font-size: 12px; line-height: 1.4; columns: 1; column-gap: 30px;">
            
            <div style="margin-bottom: 10px;">
                <strong>[1]</strong> Muhammad Toqeer Ali, Cristian Turetta, Florenc Demrozi, and Graziano Pravadelli, "ICT-Based Solutions for Alzheimer's Disease Care: A Systematic Review," IEEE Access, vol. 12, pp. 13952-13980, 2024, doi: 10.1109/ACCESS.2024.3358348.
            </div>
            
            <div style="margin-bottom: 10px;">
                <strong>[2]</strong> C. Turetta, Muhammad Toqeer Ali, F. Demrozi, and G. Pravadelli, "A Lightweight CNN for Real-Time Pre-Impact Fall Detection," in Design, Automation and Test in Europe Conference (DATE), 2025, pp. 1-6. (Best Paper Award)
            </div>
            
            <div style="margin-bottom: 10px;">
                <strong>[3]</strong> F. Demrozi, C. Turetta, and G. Pravadelli, "A low-power BAN for motor tasks assessment," in 2018 IEEE International Conference on Communications Workshops (ICC Workshops), 2018, pp. 1-6.
            </div>

            <div style="margin-bottom: 10px;">
                <strong>[4]</strong> Muhammad Toqeer Ali, C. Turetta, F. Demrozi, F. Al Machot, and G. Pravadelli, "A Lightweight CNN for Real-Time Pre-Impact Fall Detection (Extended Version)," IEEE Sensors Journal, 2025. (Manuscript)
            </div>
            

            <div style="margin-bottom: 10px;">
                <strong>[5]</strong> Dr. Florenc Demrozi, University of Stavanger, Norway - Biomedical Engineering and Sensor Applications. 
                <a href="https://scholar.google.com/citations?user=gF5XNDIAAAAJ&hl=it" target="_blank" style="color: #2c5aa0; text-decoration: none;">
                    [Google Scholar Profile]
                </a>
            </div>

            <div style="margin-bottom: 10px;">
                <strong>[6]</strong> Dr. Fadi Al Machot, Norwegian University of Life Sciences - Machine Learning and Data Augmentation. 
                <a href="https://scholar.google.com/citations?user=5ivk5WQAAAAJ&hl=en" target="_blank" style="color: #2c5aa0; text-decoration: none;">
                    [Google Scholar Profile]
                </a>
            </div>
            
        </div>
        
        <div class="highlight-box" style="margin-top: 30px;">
            <h3>📊 Publication Impact Summary</h3>
            <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                <div style="text-align: center;">
                    <div style="font-size: 2em; color: #2c5aa0; font-weight: bold;">3</div>
                    <div>Major Publications</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2em; color: #2c5aa0; font-weight: bold;">1</div>
                    <div>Best Paper Award</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2em; color: #2c5aa0; font-weight: bold;">2,459</div>
                    <div>Papers Analyzed</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2em; color: #2c5aa0; font-weight: bold;">2</div>
                    <div>Countries Collaborated</div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>

   <!-- Floating Comment Button -->
    <button class="floating-comment-btn" id="commentBtn" onclick="openCommentPanel()">
        💬
        <span class="comment-badge" id="commentBadge">0</span>
    </button>

    <!-- Comment Panel Overlay -->
    <div class="comment-overlay" id="commentOverlay" onclick="closeCommentPanel(event)">
        <div class="comment-panel" onclick="event.stopPropagation()">
            <h3>
                Comments for Slide <span id="currentSlideNum">1</span>
                <button class="close-btn" onclick="closeCommentPanel()">&times;</button>
            </h3>
            
            <div class="comment-list" id="commentList">
                <div class="no-comments">
                    No comments yet. Be the first to add feedback!
                </div>
            </div>

            <div class="comment-form">
                <div class="form-group">
                    <label for="authorName">Your Name:</label>
                    <input type="text" id="authorName" placeholder="Enter your name" maxlength="50">
                </div>
                <div class="form-group">
                    <label for="commentText">Your Comment:</label>
                    <textarea id="commentText" placeholder="Share your feedback or suggestions..." maxlength="500"></textarea>
                </div>
                <div class="form-actions">
                    <button class="btn btn-secondary" onclick="closeCommentPanel()">Cancel</button>
                    <button class="btn btn-primary" onclick="addComment()">Add Comment</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation Controls -->
    <div class="navigation">
        <button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">◀ Previous</button>
        <button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">Next ▶</button>
        <button class="nav-btn" onclick="toggleFullscreen()">⛶ Fullscreen</button>
    </div>

    <script>
        // Global variables
        let currentSlideIndex = 0;
        let comments = {}; // Store comments by slide index
        let commentsEnabled = true;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
    
        // Initialize the presentation
        function initPresentation() {
            document.getElementById('totalSlides').textContent = totalSlides;
            updateSlideDisplay();
            updateCommentBadge();
            
            // Load saved comments from Vercel API
            loadCommentsFromStorage();
        }
    
        // Navigate to specific slide
        function goToSlide(index) {
            if (index >= 0 && index < totalSlides) {
                currentSlideIndex = index;
                updateSlideDisplay();
            }
        }
    
        // Previous slide
        function changeSlide(direction) {
            const newIndex = currentSlideIndex + direction;
            if (newIndex >= 0 && newIndex < totalSlides) {
                currentSlideIndex = newIndex;
                updateSlideDisplay();
            }
        }
    
        // Update slide display
        function updateSlideDisplay() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlideIndex].classList.add('active');
            
            // Update slide counter
            document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
            
            // Update navigation buttons
            document.getElementById('prevBtn').disabled = currentSlideIndex === 0;
            document.getElementById('nextBtn').disabled = currentSlideIndex === totalSlides - 1;
            
            // Update comment badge
            updateCommentBadge();
            
            // Trigger animations for slide content
            const slideContent = slides[currentSlideIndex].querySelector('.slide-content');
            if (slideContent) {
                slideContent.style.animation = 'none';
                setTimeout(() => {
                    slideContent.style.animation = '';
                }, 10);
            }
        }
    
        // Toggle fullscreen
        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                document.body.classList.add('presentation-mode');
            } else {
                document.exitFullscreen();
                document.body.classList.remove('presentation-mode');
            }
        }
    
        // Toggle comments system
        function toggleCommentsSystem() {
            const enabled = document.getElementById('enableComments').checked;
            commentsEnabled = enabled;
            
            if (enabled) {
                document.body.classList.remove('comments-disabled');
            } else {
                document.body.classList.add('comments-disabled');
                closeCommentPanel();
            }
        }
    
        // Open comment panel
        function openCommentPanel() {
            if (!commentsEnabled) return;
            
            document.getElementById('commentOverlay').classList.add('active');
            document.getElementById('currentSlideNum').textContent = currentSlideIndex + 1;
            loadCommentsForCurrentSlide();
            
            // Clear form
            document.getElementById('authorName').value = '';
            document.getElementById('commentText').value = '';
        }
    
        // Close comment panel
        function closeCommentPanel(event) {
            if (event && event.target !== event.currentTarget) return;
            document.getElementById('commentOverlay').classList.remove('active');
        }
    
        // Load comments for current slide
        function loadCommentsForCurrentSlide() {
            console.log('=== LOAD COMMENTS FOR SLIDE DEBUG ===');
            console.log('Current slide index:', currentSlideIndex);
            console.log('All comments:', comments);
            
            const commentList = document.getElementById('commentList');
            const slideComments = comments[currentSlideIndex] || [];
            
            console.log('Comments for this slide:', slideComments);
            
            if (slideComments.length === 0) {
                commentList.innerHTML = '<div class="no-comments">No comments yet. Be the first to add feedback!</div>';
                console.log('No comments found, showing default message');
                return;
            }
            
            let html = '';
            slideComments.forEach(comment => {
                html += `
                    <div class="comment-item">
                        <div class="comment-author">${escapeHtml(comment.author)}</div>
                        <div class="comment-time">${comment.timestamp}</div>
                        <div class="comment-text">${escapeHtml(comment.text)}</div>
                    </div>
                `;
            });
            
            console.log('Generated HTML:', html);
            commentList.innerHTML = html;
        }
    
        // Add new comment
        async function addComment() {
            console.log('=== ADD COMMENT DEBUG ===');
            const author = document.getElementById('authorName').value.trim();
            const text = document.getElementById('commentText').value.trim();
            
            console.log('Author:', author, 'Text:', text);
            
            if (!author || !text) {
                showNotification('Please fill in both your name and comment!', 'warning');
                return;
            }
            
            // Initialize comments array for this slide if needed
            if (!comments[currentSlideIndex]) {
                comments[currentSlideIndex] = [];
            }
            
            // Create comment object
            const comment = {
                author: author,
                text: text,
                timestamp: new Date().toLocaleString(),
                slideIndex: currentSlideIndex
            };
            
            console.log('Created comment:', comment);
            console.log('Current slide index:', currentSlideIndex);
            
            // Add comment
            comments[currentSlideIndex].push(comment);
            
            console.log('Comments after adding:', comments);
            
            // Save to Vercel API
            await saveCommentsToStorage();
            
            // Update displays immediately
            loadCommentsForCurrentSlide();
            updateCommentBadge();
            
            // Clear form
            document.getElementById('authorName').value = '';
            document.getElementById('commentText').value = '';
            
            // Show success feedback
            showNotification('Comment added successfully!', 'success');
        }
        
        // Update comment badge
        function updateCommentBadge() {
            let totalComments = 0;
            Object.values(comments).forEach(slideComments => {
                totalComments += slideComments.length;
            });
            
            const badge = document.getElementById('commentBadge');
            if (totalComments > 0) {
                badge.textContent = totalComments;
                badge.classList.add('show');
            } else {
                badge.classList.remove('show');
            }
        }
    
        // Export all comments
        function exportAllComments() {
            if (Object.keys(comments).length === 0) {
                showNotification('No comments to export!', 'warning');
                return;
            }
            
            const exportData = {
                presentationTitle: document.title,
                exportDate: new Date().toISOString(),
                totalSlides: totalSlides,
                comments: comments,
                summary: {
                    totalComments: Object.values(comments).reduce((sum, arr) => sum + arr.length, 0),
                    slidesWithComments: Object.keys(comments).length
                }
            };
            
            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `presentation-comments-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('Comments exported successfully!', 'success');
        }
    
        // Clear all comments
        async function clearAllComments() {
            if (confirm('Are you sure you want to delete all comments? This action cannot be undone.')) {
                comments = {};
                await saveCommentsToStorage();
                loadCommentsForCurrentSlide();
                updateCommentBadge();
                showNotification('All comments cleared!', 'success');
            }
        }
    
        // Load comments from Vercel API
        async function loadCommentsFromStorage() {
            console.log('=== LOAD COMMENTS FROM API DEBUG ===');
            try {
                const response = await fetch('https://presentation-indol-eight.vercel.app/api/comments');
                console.log('API response status:', response.status);
                presentation-indol-eight.vercel.app

                if (response.ok) {
                    const data = await response.json();
                    console.log('API response data:', data);
                    
                    comments = data.comments || {};
                    console.log('Comments loaded:', comments);
                    
                    updateCommentBadge();
                    console.log('Comments loaded from Vercel API successfully');
                    
                    // If comment panel is open, refresh the display
                    if (document.getElementById('commentOverlay').classList.contains('active')) {
                        loadCommentsForCurrentSlide();
                    }
                } else {
                    throw new Error('Failed to load comments');
                }
            } catch (error) {
                console.error('Error loading comments:', error);
                showNotification('Could not load comments from server', 'warning');
                
                // Fallback to empty comments
                comments = {};
                updateCommentBadge();
            }
        }
    
        // Save comments to Vercel API
        async function saveCommentsToStorage() {
            console.log('=== SAVE COMMENTS DEBUG ===');
            console.log('Saving comments to API:', comments);
            try {
                const response = await fetch('https://presentation-lime.vercel.app/api/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ comments: comments })
                });
                
                console.log('Save response status:', response.status);
                
                if (response.ok) {
                    const result = await response.json();
                    console.log('Comments saved to Vercel:', result);
                    showNotification('Comments saved and shared with everyone!', 'success');
                } else {
                    console.error('Save failed with status:', response.status);
                    throw new Error('Failed to save comments');
                }
            } catch (error) {
                console.error('Error saving comments:', error);
                showNotification('Could not save comments to server', 'error');
                
                // Fallback to local storage
                localStorage.setItem('presentationComments', JSON.stringify(comments));
                showNotification('Comments saved locally as backup', 'warning');
            }
        }
        console.log('Script version 3 loaded');
        // Auto-refresh comments every 30 seconds to see others' comments
        // FIXED: Remove the conflicting condition
        setInterval(async () => {
            console.log('Auto-refreshing comments...');
            await loadCommentsFromStorage();
            
            // If comment panel is open, refresh the display
            if (document.getElementById('commentOverlay').classList.contains('active')) {
                loadCommentsForCurrentSlide();
            }
        }, 30000);
    
        // Utility function to escape HTML
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    
        // Show notification
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : type === 'error' ? '#dc3545' : '#007bff'};
                color: ${type === 'warning' ? '#000' : 'white'};
                padding: 15px 25px;
                border-radius: 25px;
                font-weight: 600;
                z-index: 10000;
                animation: slideDown 0.3s ease;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
    
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (document.getElementById('commentOverlay').classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeCommentPanel();
                }
                return;
            }
            
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    changeSlide(1);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    changeSlide(-1);
                    break;
                case 'f':
                case 'F11':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'c':
                case 'C':
                    e.preventDefault();
                    openCommentPanel();
                    break;
            }
        });
    
        // Auto-hide navigation in fullscreen
        let navigationTimeout;
        const navigation = document.querySelector('.navigation');
        const slideIndicator = document.querySelector('.slide-indicator');
    
        function resetNavigationTimeout() {
            clearTimeout(navigationTimeout);
            if (navigation) navigation.style.opacity = '1';
            if (slideIndicator) slideIndicator.style.opacity = '1';
            
            navigationTimeout = setTimeout(() => {
                if (document.fullscreenElement) {
                    if (navigation) navigation.style.opacity = '0.3';
                    if (slideIndicator) slideIndicator.style.opacity = '0.3';
                }
            }, 3000);
        }
    
        document.addEventListener('mousemove', resetNavigationTimeout);
        document.addEventListener('keydown', resetNavigationTimeout);
        document.addEventListener('touchstart', resetNavigationTimeout);
    
        // Handle fullscreen change
        document.addEventListener('fullscreenchange', function() {
            if (document.fullscreenElement) {
                document.body.classList.add('presentation-mode');
            } else {
                document.body.classList.remove('presentation-mode');
                if (navigation) navigation.style.opacity = '1';
                if (slideIndicator) slideIndicator.style.opacity = '1';
            }
        });
    
        // Initiali
        document.addEventListener('DOMContentLoaded', initPresentation);
    
        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateX(-50%) translateY(-100%); }
                to { transform: translateX(-50%) translateY(0); }
            }
            @keyframes slideUp {
                from { transform: translateX(-50%) translateY(0); }
                to { transform: translateX(-50%) translateY(-100%); }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html> 
