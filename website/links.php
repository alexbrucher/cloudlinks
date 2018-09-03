<?php
header("Access-Control-Allow-Origin: *");
print <<<END
  {
    "links": [
      {
        "name": "Google",
        "url": "https://google.com"
      },{
        "name": "Apple",
        "url": "https://apple.com"
      },{
        "name": "Amazon",
        "url": "https://amazon.com"
      }
    ]
  }
END;
?>
