<template>
  <v-container
    id="signupnow"
    class="fill-height container signupnow-container"
    fluid
  >
    <div class="title-wrapper">
      <div class="title-text">Let’s talk</div>
      <div class="text-subtitle-1">
        Leave your contact details below and we can kick start our process
      </div>
    </div>

    <v-form class="form-wrapper max-width" ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Phone"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="company"
              :rules="companyRules"
              label="Company ('NA' if none)"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <div class="text-subtitle-1">
              What type of business are you? (select all that applies)
            </div>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="businessType"
              label="Aspiring F&B business"
              value="Aspiring F&B business"
              :error-messages="
                (isBusinessTypeError && businessTypeErrorMsg) || ``
              "
            ></v-checkbox>
            <v-checkbox
              v-model="businessType"
              label="Existing F&B business"
              value="Existing F&B business"
              :error-messages="
                (isBusinessTypeError && businessTypeErrorMsg) || ``
              "
            ></v-checkbox>
            <v-checkbox
              v-model="businessType"
              label="Restaurant chain"
              value="Restaurant chain"
              :error-messages="
                (isBusinessTypeError && businessTypeErrorMsg) || ``
              "
            ></v-checkbox>
            <v-text-field
              v-model="otherBusinessType"
              label="Others (Please specify)"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <div class="text-subtitle-1">
              What type of F&B business are you looking at? (select all that
              applies)
            </div>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="fNBType"
              label="Chinese"
              value="Chinese"
              :error-messages="(isFNBTypeError && fNBTypeErrorMsg) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="fNBType"
              label="Indian"
              value="Indian"
              :error-messages="(isFNBTypeError && fNBTypeErrorMsg) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="fNBType"
              label="Malay halal"
              value="Malay halal"
              :error-messages="(isFNBTypeError && fNBTypeErrorMsg) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="fNBType"
              label="Bakery"
              value="Bakery"
              :error-messages="(isFNBTypeError && fNBTypeErrorMsg) || ``"
            ></v-checkbox>
            <v-text-field
              v-model="otherBusinessType"
              label="Others (Please specify)"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <div class="text-subtitle-1">
              Which areas (within Klang Valley) are you looking to serve?
              (select all that applies)
            </div>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="serveArea"
              label="I’m not sure yet"
              value="I’m not sure yet"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Bandar Utama"
              value="Bandar Utama"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Bangsar"
              value="Bangsar"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Bukit Bintang"
              value="Bukit Bintang"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Bukit Jalil"
              value="Bukit Jalil"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Cheras"
              value="Cheras"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Cyberjaya"
              value="Cyberjaya"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Kepong"
              value="Kepong"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Kota Damansara"
              value="Kota Damansara"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Mont Kiara"
              value="Mont Kiara"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Puchong"
              value="Puchong"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-checkbox
              v-model="serveArea"
              label="Subang Jaya"
              value="Subang Jaya"
              :error-messages="(isServeAreaError && serveAreaError) || ``"
            ></v-checkbox>
            <v-text-field
              v-model="otherServeArea"
              label="Others (Please specify)"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn @click="handleSubmit">submit</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import checkIsMobile from '../mixin/checkIsMobile';

export default {
  mixins: [checkIsMobile],
  data() {
    return {
      valid: true,
      email: '',
      lastname: '',
      firstname: '',
      phone: '',
      company: '',
      businessType: [],
      otherBusinessType: '',
      businessTypeErrorMsg: '',
      fNBType: [],
      otherFNBType: '',
      fNBTypeErrorMsg: '',
      serveArea: [],
      otherServeArea: '',
      serveAreaError: '',
      phoneRules: [v => !!v || 'Phone is required'],
      companyRules: [v => !!v || 'Company is required'],
      nameRules: [v => !!v || 'Name is required'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    async submit(payload) {
      const url =
        'https://ca2bdh2iqd.execute-api.ap-southeast-1.amazonaws.com/default/postContactDetails';
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('response', response);
      return response.json();
    },
    async handleSubmit() {
      const errors = [
        !this.$refs.form.validate(),
        this.isBusinessTypeError,
        this.isFNBTypeError,
        this.isServeAreaError,
      ];
      this.$refs.form.validate();

      console.log('this.isFNBTypeError', this.isFNBTypeError);
      if (this.isBusinessTypeError) {
        this.businessTypeErrorMsg = 'Please select your business';
      }

      if (this.isFNBTypeError) {
        this.fNBTypeErrorMsg = 'Please select your F&B business';
      }

      if (this.isServeAreaError) {
        this.serveAreaError = 'Please select your area';
      }

      if (errors.some(error => error)) {
        return;
      }

      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        company: this.company,
        businessType: [...this.businessType, this.otherBusinessType],
        fNBType: [...this.fNBType, this.otherFNBType],
        serveArea: [...this.serveArea, this.otherServeArea],
      };

      await this.submit(payload);
      this.$swal('Your request has been submited!');
    },
  },
  computed: {
    isBusinessTypeError() {
      return !this.businessType.length && !this.otherBusinessType;
    },
    isFNBTypeError() {
      return !this.fNBType.length && !this.otherFNBType;
    },
    isServeAreaError() {
      return !this.serveArea.length && !this.otherServeArea;
    },
  },
};
</script>

<style lang="stylus" scoped>
.title {
  &-text {
    font-size: 48px;
  }

  &-wrapper {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
}

.form-wrapper {
  width: 100%;
}

.signupnow {
  &-container {
    justify-content: center;
  }
}
</style>
