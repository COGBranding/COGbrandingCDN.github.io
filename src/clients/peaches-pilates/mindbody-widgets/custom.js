// dropdownmenu function to creeate a dropdown like affect using list. works fine with safari
function dropdownMenu() {
  $('.dropdown__field').each(function (index) {
    window.onclick = function (event) {
      console.log(event.target)
      if (!event.target.matches(".dropdown")) {
        if ($('.dropdown__items__list').hasClass("open")) {
          $('.dropdown__items__list').removeClass("open");
        }

      }
    };
    $(this).on("click", function (event) {
      var hc = $(this).parent().find('.dropdown__items__list').hasClass("open");
      console.log($(this).parent().find('.dropdown__items__list'));
      console.log(hc);
      $('.dropdown__items__list').removeClass("open");
      if (!hc) {
        $(this).parent().find('.dropdown__items__list').addClass("open");
      }
      event.stopPropagation();
    });
  })
}

if (dropdownMenu) {
  dropdownMenu();
}

<healcode-widget data-version="0.2" data-link-class="healcode-contract-text-link" data-site-id="" 
data-mb-site-id="" data-bw-identity-site="false" data-type="contract-link" 
data-inner-html="Buy Now" data-service-id="">
  <a href="" class="healcode-link healcode-contract-text-link" 
  data-url="" data-widget-name="contract-link" 
  data-mbo-site-id="" rev="iframe" title="" data-hc-open-modal="modal-iframe" data-bw-identity-site="false">Buy Now</a>
</healcode-widget>

// function to prepare mindbody code and emulate click on the link button to open mindbody popup
function prepMB(url, mb_site_id, service_id, site_id) {
  $('a.healcode-link.healcode-contract-text-link').attr('data-url', url);
  $('a.healcode-link.healcode-contract-text-link').attr('data-mbo-site-id', mb_site_id);
  $('a.healcode-link.healcode-contract-text-link').attr('title', service_id);
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-mb-site-id', mb_site_id);
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-service-id', service_id);
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-site-id', site_id);
  jQuery('a.healcode-link.healcode-contract-text-link').trigger("click");
  cleanMB();
}

// function to clean mindbody widget to ensure no false click opens up a mindbody popup to cause any issue
function cleanMB() {
  $('a.healcode-link.healcode-contract-text-link').attr('data-url', '');
  $('a.healcode-link.healcode-contract-text-link').attr('data-mbo-site-id', '');
  $('a.healcode-link.healcode-contract-text-link').attr('title', '');
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-mb-site-id', '');
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-service-id', '');
  $('a.healcode-link.healcode-contract-text-link').parent().attr('data-site-id', '');
}


// the below code selects the respective dropdown settings and based on the location clicked, prepated the mindbody plugin and open up the popup
// repeat the following block for all the popups to ensure it all works.
$('div.peaches-trials a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=11259', '275563', '11259', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=11259', '456257', '11259', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=100045', '546404', '100045', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=101134', '785497', '101134', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=11259', '5729690', '11259', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-unlimiteds a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_contract?mbo_item_id=107', '275563', '107', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_contract?mbo_item_id=107', '456257', '107', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_contract?mbo_item_id=107', '546404', '107', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_contract?mbo_item_id=110', '785497', '110', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_contract?mbo_item_id=107', '5729690', '107', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-mom-unlimiteds a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_contract?mbo_item_id=110', '275563', '110', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_contract?mbo_item_id=110', '456257', '110', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_contract?mbo_item_id=110', '546404', '111', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_contract?mbo_item_id=114', '785497', '114', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_contract?mbo_item_id=110', '5729690', '110', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-group-single a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10102', '275563', '10102', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10102', '456257', '10102', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10102', '546404', '10102', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100021', '785497', '100021', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10102', '5729690', '10102', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-group-5 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10126', '275563', '10126', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10126', '456257', '10126', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10126', '546404', '10126', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100022', '785497', '100022', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10126', '5729690', '10126', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-group-10 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10103', '275563', '10103', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10103', '456257', '10103', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10103', '546404', '10103', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100023', '785497', '100023', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10103', '5729690', '10103', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-peachymom-single a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10108', '275563', '10108', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10108', '456257', '10108', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10108', '546404', '10108', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100045', '785497', '100045', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10108', '5729690', '10108', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-peachymom-5 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10150', '275563', '10150', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10150', '456257', '10150', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10150', '546404', '10150', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100051', '785497', '100051', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10150', '5729690', '10150', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-peachymom-10 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'bondi':
      prepMB('https://cart.mindbodyonline.com/sites/67178/cart/add_service?mbo_item_id=10151', '275563', '10151', '67178');
      break;
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10151', '456257', '10151', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10151', '546404', '10151', '86320');
      break;
    case 'maroubra':
      prepMB('https://cart.mindbodyonline.com/sites/88170/cart/add_service?mbo_item_id=100052', '785497', '100052', '88170');
      break;
    case 'fitzroy':
      prepMB('https://cart.mindbodyonline.com/sites/111490/cart/add_service?mbo_item_id=10151', '5729690', '10151', '111490');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-private-single a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10110', '456257', '10110', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10110', '546404', '10110', '86320');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-private-5 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10152', '456257', '10152', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10152', '546404', '10152', '86320');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})

$('div.peaches-private-10 a').on('quickChange change click ', function () {
  studio = $(this).attr('data-id');
  switch (studio) {
    case 'byron':
      prepMB('https://cart.mindbodyonline.com/sites/100201/cart/add_service?mbo_item_id=10111', '456257', '10111', '100201');
      break;
    case 'cronulla':
      prepMB('https://cart.mindbodyonline.com/sites/86320/cart/add_service?mbo_item_id=10111', '546404', '10111', '86320');
      break;
    default:
      console.log('no studio selected')
      break;
  }
})
