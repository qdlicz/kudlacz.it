var typed = new Typed("#shell", {
    strings: [
      "ls ~ ^250 `<br />Desktop Documents Downloads Pictures Videos Michal_Kudlacz_CV.txt`",
      'cat Michal_Kudlacz_CV.txt ^250 `<p>about: "My name is Michal Kudlacz and I am an experienced IT professional with a strong background in managing and developing CCTV and Linux systems."</p><p>current_role: "In my current role (as of April 2023), I have deployed over 1000 Linux machines running Ubuntu, Mint and XCP-NG. They are respectively being used on servers, client boxes and for Virtualisation - alongside with XenOrchestra. I have also been working with a variety of technologies, including PHP, MySQL, PostgreSQL, Ansible and Zabbix."</p><p>soft_skills: "I demonstrate very strong troubleshooting skills as well as the ability to help non-technical people with more complex issues."</p>`',
      'grep "about" Michal_Kudlacz_CV.txt ^250 `<br /><span style="color:#ff0000">about: </span>"My name is Michal Kudlacz and I am an experienced IT professional with a strong background in managing and developing CCTV and Linux systems."`',
      "grep \"current_role\" Michal_Kudlacz_CV.txt | awk -F ':' {'print $2'} | sed 's/\"//g' ^250 `<br />In my current role (as of April 2023), I have deployed over 1000 Linux machines running Ubuntu, Mint and XCP-NG. They are respectively being used on servers, client boxes and for Virtualisation - alongside with XenOrchestra. I have also been working with a variety of technologies, including PHP, MySQL, PostgreSQL, Ansible and Zabbix.`",
      "tac Michal_Kudlacz_CV.txt | head -n 1 | grep -oP '(\".*?\")' ^250 `<br />I demonstrate very strong troubleshooting skills as well as the ability to help non-technical people with more complex issues.`",
    ],
    // strings: [
   
    //   'cat Michal_Kudlacz_CV.txt ^250 `<p>about: "My name is Michal Kudlacz and I am an experienced IT professional with a strong background in managing and developing CCTV and Linux systems."</p><p>current_role: "In my current role (as of April 2023), I have deployed over 1000 Linux machines running Ubuntu, Mint and XCP-NG. They are respectively being used on servers, client boxes and for Virtualisation - alongside with XenOrchestra. I have also been working with a variety of technologies, including PHP, MySQL, PostgreSQL, Ansible and Zabbix."</p><p>soft_skills: "I demonstrate very strong troubleshooting skills as well as the ability to help non-technical people with more complex issues."</p>`',
    
    // ],
    typeSpeed: 60,
    backDelay: 3000,
    backSpeed: 0,
    loop: true,
  });