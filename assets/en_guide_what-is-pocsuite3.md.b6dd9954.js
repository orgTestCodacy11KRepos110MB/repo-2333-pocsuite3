import{_ as e,j as t,g as a,H as o}from"./chunks/framework.8815fd6f.js";const m=JSON.parse('{"title":"What is Pocsuite3\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Features","slug":"features"},{"level":3,"title":"Vulnerability Testing Framework","slug":"vulnerability-testing-framework"},{"level":3,"title":"PoC/Exp Development Kit","slug":"poc-exp-development-kit"},{"level":3,"title":"Integratable Module","slug":"integratable-module"},{"level":3,"title":"Integrate ZoomEye, Seebug, Ceye, Shodan, etc.","slug":"integrate-zoomeye-seebug-ceye-shodan-etc"},{"level":2,"title":"Highlights","slug":"highlights"}],"relativePath":"en/guide/what-is-pocsuite3.md","lastUpdated":1663185605000}'),i={name:"en/guide/what-is-pocsuite3.md"},r=o('<h1 id="what-is-pocsuite3\uFF1F" tabindex="-1">What is Pocsuite3\uFF1F <a class="header-anchor" href="#what-is-pocsuite3\uFF1F" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We are not native speakers, if you are interested, you can help us improve the documentation. We really appreciate all the effort. Contact: <a href="https://github.com/knownsec/pocsuite3/issues" target="_blank" rel="noreferrer">https://github.com/knownsec/pocsuite3/issues</a></p></div><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Pocsuite3 is an open source remote vulnerability testing and PoC development framework developed by the <a href="https://paper.seebug.org" target="_blank" rel="noreferrer">Knownsec 404 Team</a>. Since Pocsuite3 was open sourced in 2015, Knownsec 404 Team has been continuously maintaining and updating.</p><p>You can directly use Pocsuite3 to verify and exploit vulnerabilities, and you can also develop PoC/Exp based on Pocsuite3, because it is also a PoC development framework. at the same time, you can directly integrate Pocsuite3 in your vulnerability testing tool, which also provides standard the calling class.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><h3 id="vulnerability-testing-framework" tabindex="-1">Vulnerability Testing Framework <a class="header-anchor" href="#vulnerability-testing-framework" aria-hidden="true">#</a></h3><p>Pocsuite3 is written in Python3, It supports three modes: verify, attack and shell. You can specify a single target or import multiple targets from a file, and use a single PoC or a set of PoCs to verify or exploit vulnerabilities. It can be run in command line mode, and also supports Metasploit-like interactive mode. In addition, it also includes some basic functions such as output results reports.</p><h3 id="poc-exp-development-kit" tabindex="-1">PoC/Exp Development Kit <a class="header-anchor" href="#poc-exp-development-kit" aria-hidden="true">#</a></h3><p>Pocsuite3 is also a PoC/Exp SDK, that is, a development kit. We encapsulate the basic PoC classes and some commonly used methods, such as Webshell related methods. To develop PoC/Exp based on Pocsuite3, you can just write the core code of the Vulnerability, without having to care about the overall result output and other processing. PoC/Exp written based on Pocsuite3 can be used directly by Pocsuite3, <a href="https://www.seebug.org" target="_blank" rel="noreferrer">Seebug</a> website also has thousands of PoC/Exp based on Pocsuite3.</p><h3 id="integratable-module" tabindex="-1">Integratable Module <a class="header-anchor" href="#integratable-module" aria-hidden="true">#</a></h3><p>In addition to being a security tool itself, Pocsuite3 can also be integrated into the vulnerability testing module as a Python package. You can also develop your own applications based on Pocsuite3. We have encapsulated PoC API in Pocsuite3 that can be imported by other programs. You can perform secondary development based on Pocsuite3 and use Pocsuite3 to develop your own vulnerability verification tools.</p><h3 id="integrate-zoomeye-seebug-ceye-shodan-etc" tabindex="-1">Integrate ZoomEye, Seebug, Ceye, Shodan, etc. <a class="header-anchor" href="#integrate-zoomeye-seebug-ceye-shodan-etc" aria-hidden="true">#</a></h3><p>Pocsuite3 also integrates the APIs of many security services such as ZoomEye, Seebug, Ceye, Shodan, etc. Through this function, you can obtain test targets with specified conditions in batches through the ZoomEye API (search through ZoomEye&#39;s Dork), and at the same time obtain the vulnerability PoC through the Seebug API. perform automated batch testing, and use Ceye to verify OOB DNS and HTTP requests.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-hidden="true">#</a></h2><ul><li>PoC scripts can running with verify, attack, shell mode in different way</li><li>Dynamic loading PoC script from any where (local file, redis, database, Seebug ...)</li><li>Load multi target from any where (CIDR, local file, redis, database, Zoomeye, Shodan ...)</li><li>Results can be easily exported</li><li>Plugin system, users can customize plugins of TARGETS, POCS, RESULTS, which is highly expandable</li><li>Hook of network library (urllib3, requests), convenient for PoC writing and global control</li><li>Can be used either as a command-line tool or imported as a Python module</li><li>It supports IPv4 / IPv6</li><li>Global HTTP/HTTPS/SOCKS proxy support</li><li>Integrate with <a href="https://www.seebug.org" target="_blank" rel="noreferrer">Seebug</a> (for load PoC from Seebug website)</li><li>Integrate with <a href="https://www.zoomeye.org" target="_blank" rel="noreferrer">ZoomEye</a>, <a href="https://www.shodan.io" target="_blank" rel="noreferrer">Shodan</a>, etc. (for load target use <code>Dork</code>)</li><li>Integrate with <a href="http://ceye.io/" target="_blank" rel="noreferrer">Ceye</a>, <a href="https://github.com/projectdiscovery/interactsh" target="_blank" rel="noreferrer">Interactsh</a> (for verify OOB DNS and HTTP request)</li><li>All code is open source</li><li>more...</li></ul><p>Compared with Metasploit, Pocsuite3 currently does not have the ability of post penetration stage, which is relatively lightweight. Compared with the PoC framework in YAML format, Pocsuite3 is more flexible and can directly use a large number of third-party libraries. As long as users can write python, they can get started quickly.</p><p>At present, Pocsuite3&#39;s support for YAML format PoC is also planned. Please look forward to it \u{1F603}</p>',18),s=[r];function n(l,c,u,h,d,p){return a(),t("div",null,s)}var b=e(i,[["render",n]]);export{m as __pageData,b as default};
