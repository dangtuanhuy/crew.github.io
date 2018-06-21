# CREW TEAM
Đây là sản phẩm đóng góp của nhóm <b>CREW.</b><br>
CP1796M01 - CUSC APTECH

# Menu code
<!-- Start navbar --> Code of the main menu <br>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark primary-color scrolling-navbar">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="index.html">
            <b>Crew</b>
        </a>
        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">
            <!-- Links -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <!-- Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Documentation
                    </a>
                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Introduction</a>
                        <a class="dropdown-item" href="#">Get Started</a>
                        <a class="dropdown-item" href="#">Tutorial</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact Us
                    </a>
                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">GitHub</a>
                        <a class="dropdown-item" href="#">Facebook</a>
                        <a class="dropdown-item" href="mailto:jeonkyosin@gmail.com" target="_top">Send Mail</a>
                        <a class="dropdown-item" href="#">About Us</a>
                    </div>
                </li>
            </ul>
            <span class="navbar-text white-text text-uppercase" id="crewver">
                version 1.0.1
            </span>
        </div>
        <!-- Collapsible content -->
    </nav>
<!-- End navbar -->

# Cấu trúc Code Box
<!-- Class wrapCode sẽ tạo một hộp chứa code-->
    <div class="wrapCode">
        <!-- Class .btn-copy định dạng nút copy trong Code Box -->
        <button class="btn-copy" data-toggle="tooltip" data-clipboard-target="#AreaID" data-placement="right" title="Copy this code">Copy</button>
        <!--Nội dung trong div có ID #AreaID sẽ được copy khi nhấn nút-->
        <div id="AreaID">
            <!-- Code viết liền ngay sau thẻ <code> 
            Không enter đầu dòng sau thẻ code -->
            <pre><code>Your code</code ></pre >
        </div>
    </div>
