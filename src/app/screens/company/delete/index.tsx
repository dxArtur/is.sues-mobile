import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import Modal2 from "@/src/components/company/Modal2";
import JobDetail from "@/src/components/company/JobDetail";
import Button1 from "@/src/components/company/Button1";
import PopUp from "@/src/components/company/PopUp";
import styles from "./styles"

const DetalhesDaEmpresaApagar = () => {
  return (
    <View style={styles.detalhesDaEmpresaApagar}>
      <Modal2
        jobDetails="Detalhes da  Empresa"
        component1={require("@/src/assets/images/component-11.png")}
        showSearchBar={false}
        component1IconLeft={93}
        cardano2={require("@/src/assets/images/cardano-21.png")}
        showFrameView={false}
      />
      <View style={[styles.jobDetailParent, styles.pngwingcom71Position]}>
        <JobDetail />
        <View
          style={[
            styles.jobDescriptionParent,
            styles.jobDescriptionParentPosition,
          ]}
        >
          <Text style={[styles.jobDescription, styles.remoteFlexBox]}>
            Descrição da Empresa
          </Text>
          <View
            style={[
              styles.loremIpsumDolorSitAmetCoWrapper,
              styles.jobDescriptionParentPosition,
            ]}
          >
            <Text
              style={[styles.loremIpsumDolor, styles.salaryTypo]}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec porttitor magna luctus tortor. Pretium malesuada lobortis consequat et mauris. 
`}</Text>
          </View>
        </View>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("@/src/assets/images/group-162896.png")}
        />
        <Text style={[styles.email, styles.emailTypo]}>
          contato@company.com.br
        </Text>
        <Text style={[styles.remote, styles.emailTypo]}>Company Ltda</Text>
        <Image
          style={[styles.pngwingcom71, styles.pngwingcom71Position]}
          contentFit="cover"
          source={require("@/src/assets/images/pngwingcom-7-1.png")}
        />
        <Text style={[styles.salary, styles.salaryTypo]}>Email</Text>
        <Button1
          text="Apagar Empresa"
          buttonPosition="absolute"
          buttonTop={596}
          buttonLeft={6}
          buttonWidth={327}
          buttonAlignSelf="unset"
          buttonHeight="unset"
        />
      </View>
      <PopUp iconSuccess={require("@/src/assets/images/icon--success.png")} />
    </View>
  );
};

export default DetalhesDaEmpresaApagar;
