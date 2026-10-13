/**
 * Dynamic Accessibility Enhancements
 * Injects descriptive ARIA labels to icon-only navigation and links
 * to resolve Lighthouse accessibility and SEO audit requirements.
 */
jQuery(document).ready(function ($) {
  // 1. Header Search & Account Actions
  var $searchBtn = $("a.search-icon-fmt");
  if ($searchBtn.length && !$searchBtn.attr("aria-label")) {
    $searchBtn.attr("aria-label", "Search products");
  }

  var $accountBtn = $("a.customer-signinup");
  if ($accountBtn.length && !$accountBtn.attr("aria-label")) {
    $accountBtn.attr("aria-label", "My account");
  }

  // 2. Social Navigation Links
  $("a.social-facebook").each(function () {
    if (!$(this).attr("aria-label")) {
      $(this).attr("aria-label", "Follow us on Facebook");
    }
  });

  $("a.social-tiktok").each(function () {
    if (!$(this).attr("aria-label")) {
      $(this).attr("aria-label", "Follow us on TikTok");
    }
  });

  $("a.social-instagram").each(function () {
    if (!$(this).attr("aria-label")) {
      $(this).attr("aria-label", "Follow us on Instagram");
    }
  });

  // 3. Loop Product Image Links
  $(".pls-product-image a.woocommerce-loop-product__link").each(function () {
    if (!$(this).attr("aria-label")) {
      var $title = $(this)
        .closest(".pls-product-inner")
        .find(".woocommerce-loop-product__title");
      var titleText = $title.length ? $title.text() : "View Product";
      $(this).attr("aria-label", titleText);
    }
  });
});
