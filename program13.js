const jwt = require(&#39;jsonwebtoken&#39;);

const generateToken = () =&gt; {
const token = jwt.sign(
{ userId: 1 },
&quot;secret_key&quot;,
{ expiresIn: &quot;1h&quot; }
);

console.log(token);
};

generateToken();
