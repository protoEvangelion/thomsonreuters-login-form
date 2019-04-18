;(function() {
  // Show/Hide Thomas Reuters Login Form
  const loginForm = document.querySelector('.thomsonreuters-login-form')
  const loginFormMobile = document.querySelector(
    '.thomsonreuters-login-form-mobile'
  )
  const loginToggler = document.querySelector('.classlogin-wrap')
  const loginTogglerMobile = document.querySelector(
    '.top_nav_mobile .classlogin-wrap'
  )

  loginToggler &&
    loginToggler.addEventListener(
      'click',
      toggleLoginForm.bind(null, loginForm)
    )
  loginTogglerMobile &&
    loginTogglerMobile.addEventListener(
      'click',
      toggleLoginForm.bind(null, loginFormMobile)
    )

  function toggleLoginForm(form) {
    form.classList.toggle('thomsonreuters-login-form-visible')
  }

  // Thomas Reuters script
  window.jQuery || appendJqueryScript()

  const localResource = 'wp-content/uploads/2019/03/1.png'

  const p = document.compatMode == 'CSS1Compat' ? 'fixed' : 'absolute'
  const c = location.protocol + '//' + location.host + '/' + localResource

  window.jQuery('.thomsonreuters-login-form a').click(function() {
    var b = window
      .jQuery(
        '<iframe id="trResetPwdFrame" style="background-color:transparent;display:none;position:' +
          p +
          ';top:0;left:0;border:0;height:100%;width:100%;overflow:hidden" allowtransparency="true"></iframe>'
      )
      .appendTo('body')
      .load(function() {
        try {
          b[0].contentWindow.name === 'close' &&
            setTimeout(function() {
              b.remove()
            }, 0)
        } catch (d) {}
      })
      .show()
      .attr(
        'src',
        'https://secure.netlinksolution.com/nextgen/packaged/pwd-reset/1.1.0/index.html#' +
          c
      )

    return false
  })

  function appendJqueryScript() {
    const script = document.createElement('script')
    script.async = false
    script.src =
      'https://secure.netlinksolution.com/repository/jquery/1.7.2/jquery.min.js'
    document.head.appendChild(script)
  }
})()
