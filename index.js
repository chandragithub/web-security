/**
 *  Copyright © http://randomrise.com, as an published work.  All rights reserved.
 *  THIS SOFTWARE OR DATA IS THE PROPERTY OF http://randomrise.com.
 *  THIS SOFTWARE INTENTD TO PROVIDE OPEN SOURCE (FREE TO USE) BUT ANY REPRODUCTION NOT ALLOWED.
 *  CONTACT: http://randomrise.com
 *
 * @author ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
 * @date 13/08/2016
 * @version 0.0.2 (beta)
 */

var webSecurity = (function () 
{
    var webSecurity = {};
    
    webSecurity.escape = function (htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
        return String(htmlStr)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
    };
    
    webSecurity.strictEscape = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
        return String(htmlStr)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\%/g, '&#37;')
          .replace(/\;/g, '&#59;')
          .replace(/\(/g, '&#40;')
          .replace(/\)/g, '&#41;')
          .replace(/\+/g, '&#43;')
          .replace(/\-/g, '&#45;');
       } 
    };
    
    
    webSecurity.reverseEscape = function(htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
         return String(htmlStr)
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&#37;/g, '%')
          .replace(/&#59;/g, ';')
          .replace(/&#40;/g, '(')
          .replace(/&#41;/g, ')')
          .replace(/&#43;/g, '+')
          .replace(/&#45;/g, '-');
      }
    };
    
    webSecurity.unescape = function(htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
         return htmlStr;
      }

    };
    
    webSecurity.removeUnsafe = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
         return String(htmlStr)
          .replace(/&/g, '')
          .replace(/"/g, '')
          .replace(/'/g, '')
          .replace(/</g, '')
          .replace(/>/g, '');
       }
    };
    
    webSecurity.removeStrictUnsafe = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
        return String(htmlStr)
          .replace(/&/g, '')
          .replace(/"/g, '')
          .replace(/'/g, '')
          .replace(/</g, '')
          .replace(/>/g, '')
          .replace(/\%/g, '')
          .replace(/\;/g, '')
          .replace(/\(/g, '')
          .replace(/\)/g, '')
          .replace(/\+/g, '')
          .replace(/\-/g, '');
       } 
    };

    webSecurity.safeUrl = function()
    {
        if(typeof window !== 'undefined')
        {
           var searchLocation =  location.search;
           var unSafeChar = searchLocation.match(/[script]/g);
              
           ((unSafeChar !== null) ? (unSafeChar.length > 0 ? location.replace("/") : "") : "");
             
        }
        else
        {
           throw "Node Doesn't Support safeUrl";
        }
    };
    
    webSecurity.unSafeUrl = function()
    {
        var searchLocation =  location.search;
        location.replace(searchLocation);
    };
     
    return webSecurity;
    
}());

if (typeof window === 'undefined') 
{
    module.exports = webSecurity;
}
else 
{
    window.webSecurity = webSecurity;
};